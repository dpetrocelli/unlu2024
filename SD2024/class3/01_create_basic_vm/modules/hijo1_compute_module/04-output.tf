output "external_ip" {
  value = google_compute_instance.spot_vm_instance[*].network_interface[0].access_config[0].nat_ip
}

output "id" {
  value = google_compute_instance.spot_vm_instance[*].instance_id
}

output "name" {
  value = google_compute_instance.spot_vm_instance[*].name
}