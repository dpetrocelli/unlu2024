locals {
  linux_metadata = templatefile("${path.module}/scripts/linux-metadata.tpl", {})
}


resource "google_compute_instance_template" "this" {
  name        = "${var.name}-${var.deploy_version}"
  description = var.instance_template_description

  tags = var.tags

  labels = {
    service = var.name
    version = var.deploy_version
  }

  metadata = {
    version                = var.deploy_version
    block-project-ssh-keys = true
  }

  instance_description = var.instance_description
  machine_type         = var.machine_type
  can_ip_forward       = false

  metadata_startup_script = local.linux_metadata
  scheduling {
    preemptible         = true
    automatic_restart   = false // Adjusted for preemptibility
    on_host_maintenance = "TERMINATE"
  }

  disk {
    source_image = data.google_compute_image.ubuntu.self_link
    boot         = true
    disk_type    = "pd-balanced"
  }

  network_interface {
    network = var.network
    //subnetwork = data.google_compute_subnetwork.subnet.name
  }

  # service_account {
  #   # Google recommends custom service accounts that have cloud-platform scope and permissions granted via IAM Roles.
  #   email  = data.google_service_account.this.email
  #   scopes = ["cloud-platform"]
  # }

  lifecycle {
    create_before_destroy = true
  }
}
