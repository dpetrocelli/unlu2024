output "instance_public_ips" {
  value       = [for instance in google_compute_instance.vm_instance : "${instance.name} - ${instance.network_interface[0].access_config[0].nat_ip}"]
  description = "The public IP addresses of the VM instances."
}

output "user_email" {
  value       = split("@", data.google_client_openid_userinfo.me.email)[0]
  description = "Email of the authenticated user."
}

