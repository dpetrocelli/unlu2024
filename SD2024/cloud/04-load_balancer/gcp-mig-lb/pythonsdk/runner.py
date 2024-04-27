from google.oauth2 import service_account
from googleapiclient import discovery
import paramiko
import concurrent.futures

# List all zones in a project
def list_zones(project_id, credentials):
    service = discovery.build('compute', 'v1', credentials=credentials)
    request = service.zones().list(project=project_id)
    zones = []
    try:
        response = request.execute()
        for zone in response.get('items', []):
            zones.append(zone['name'])
    except Exception as e:
        print(f"Failed to retrieve zones: {e}")
    return zones

# Execute SSH command on an instance
def execute_ssh_command(ip, username, key_path, command):
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        client.connect(ip, username=username, key_filename=key_path, timeout=1000)
        stdin, stdout, stderr = client.exec_command(command, get_pty=True)

        # Read output in real-time
        for line in iter(stdout.readline, ""):
            print(f"Output from {ip}: {line.strip()}")

        error = stderr.read().decode()
        if error:
            print(f"Error on {ip}: {error}")

    except Exception as e:
        print(f"Error connecting or executing on {ip}: {e}")
    finally:
        client.close()

# List and execute commands on all instances across all zones
def list_and_execute_commands(project_id, username, key_path, command):
    credentials = service_account.Credentials.from_service_account_file(
        '/Users/david/Documents/code/newfolder/unlu2024/SD2024/credentials/credentials.json')
    zones = list_zones(project_id, credentials)

    try:
        with concurrent.futures.ThreadPoolExecutor() as executor:
            futures = []
            for zone in zones:
                service = discovery.build('compute', 'v1', credentials=credentials)
                request = service.instances().list(project=project_id, zone=zone)
                response = request.execute()
                instances = response.get('items', [])
                for instance in instances:
                    for interface in instance.get('networkInterfaces', []):
                        for config in interface.get('accessConfigs', []):
                            if 'natIP' in config:
                                ip = config['natIP']
                                print('Zone:', zone, 'Instance name:', instance['name'], 'External IP:', ip)
                                future = executor.submit(execute_ssh_command, ip, username, key_path, command)
                                futures.append(future)

            # Wait for all futures to complete
            concurrent.futures.wait(futures)
    except Exception as e:
        print(e)

# Example usage
project_id = "double-freehold-416321"
username = "tf-code"
key_path = "/Users/david/Documents/code/newfolder/unlu2024/SD2024/cloud/04-load_balancer/gcp-mig-lb/.ssh/google_compute_engine"
command = "sudo stress-ng --cpu 8 --io 4 --vm 8 --vm-bytes 12800000M --timeout 350s --metrics-brief"

list_and_execute_commands(project_id, username, key_path, command)
