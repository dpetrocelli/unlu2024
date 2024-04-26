# output "instance_public_ips" {
#   value       = [for instance in google_compute_instance.instance : "${instance.name} - ${instance.network_interface[0].access_config[0].nat_ip}"]
#   description = "The public IP addresses of the VM instances."
# }

# output "user_email" {
#   value       = split("@", data.google_client_openid_userinfo.me.email)[0]
#   description = "Email of the authenticated user."
# }

# output "instance_public_ips" {
#   value       = [for instance in google_compute_instance.instances : "${instance.name} - ${instance.network_interface[0].access_config[0].nat_ip}"]
#   description = "The public IP addresses of the VM instances with their names."
# }

output "user_info" {
  value       = split("@", data.google_client_openid_userinfo.me.email)[0]
  description = "Information about the authenticated user."
}

# output "instances" {
#   value       = [for instance in google_compute_instance.instances : instance.id]
#   description = "List of instance IDs"
# }
