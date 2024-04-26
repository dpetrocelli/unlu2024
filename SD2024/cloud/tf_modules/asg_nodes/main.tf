
provider "google" {
  credentials = file("../../../credentials/credentials.json")
  project     = "double-freehold-416321"
  region      = var.region
  zone        = var.zone
}

provider "google-beta" {
  credentials = file("../../../credentials/credentials.json")
  project     = "double-freehold-416321"
  region      = var.region
  zone        = var.zone
}


data "google_compute_network" "network" {
  name = var.network
}

data "google_compute_subnetwork" "subnet" {
  name = var.subnet
}

data "google_compute_instance_template" "generic" {
  project     = var.project
  name        = "${var.name}-${var.deploy_version}"
  most_recent = true

  depends_on = [google_compute_instance_template.this]
}



