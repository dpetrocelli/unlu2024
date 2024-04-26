

# data "google_compute_network" "network" {
#   name = var.network
# }

# data "google_compute_subnetwork" "subnet" {
#   name = var.subnet
# }

data "google_compute_instance_template" "generic" {
  project     = var.name
  name        = "${var.name}-${var.deploy_version}"
  most_recent = true

  depends_on = [google_compute_instance_template.this]
}

# data "google_compute_instance_group" "this" {
#   name = var.name
# }

# data "google_compute_health_check" "health_check" {
#   name = "${var.name}-healthcheck"
# }

data "google_compute_image" "ubuntu" {
  family  = "ubuntu-2204-lts"
  project = "ubuntu-os-cloud"
}
