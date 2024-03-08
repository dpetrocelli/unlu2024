# # EXAMPLE 1 - Basic VM + Firewall 
# # Create a static public IP address
# zone=us-east1
# gcloud compute addresses create instance-public-ip --region=$zone

# # Create a firewall rule to allow traffic on port 80
# gcloud compute firewall-rules create allow-http --direction=INGRESS --priority=1000 --network=default --action=ALLOW --rules=tcp:80 --source-ranges=0.0.0.0/0

# # Create the instance with the specified settings
# gcloud compute instances create vm1 \
#     --machine-type=e2-micro \
#     --preemptible \
#     --image-family=ubuntu-2204-lts \
#     --image-project=ubuntu-os-cloud \
#     --tags=http-server \
#     --metadata-from-file user-data=../userdata/script.sh \
#     --zone="$zone-b" \

#     --address=instance-public-ip

# gcloud compute instances delete vm1 --zone="$zone-b"


# EXAMPLE 2 - Basic VM + SSH + Firewall + Dive into
ssh-keygen -t rsa -b 4096 -C "dmpetrocelli@example.com"

# EXAMPLE 1 - Basic VM + Firewall 