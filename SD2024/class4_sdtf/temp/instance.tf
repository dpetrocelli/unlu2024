
data "google_client_openid_userinfo" "me" {}

resource "google_compute_instance" "vm_instance" {
  count        = var.nodes
  name         = "terraform-insxxtance-${count.index}"
  machine_type = "e2-medium"
  zone         = "us-east1-b"
  boot_disk {
    initialize_params {
      image = "ubuntu-os-cloud/ubuntu-2004-lts"
    }
  }
  metadata = {
    ssh-keys = "${split("@", data.google_client_openid_userinfo.me.email)[0]}:${tls_private_key.ssh.public_key_openssh}"
  }
  network_interface {
    network = "default"
    access_config {}
  }
  metadata_startup_script = file(var.metadata_startup_script)

}
