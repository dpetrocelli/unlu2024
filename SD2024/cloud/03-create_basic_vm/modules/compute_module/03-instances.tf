locals {
  codebase_root_path = abspath("${path.module}/../../../10_00_credentials")
}

data "google_client_openid_userinfo" "me" {}


# Bootstrapping Script to Install Apache
data "template_file" "linux-metadata" {
  template = <<EOF
sudo apt-get update; 
sudo apt-get install -y apache2;
sudo apt-get install -y openjdk-17-jdk;
sudo systemctl start apache2;
sudo systemctl enable apache2;

EOF 
}

data "google_compute_image" "debian_image" {
  family  = var.base_os.family
  project = var.base_os.project
}

output "debian_iso" {
  value = data.google_compute_image.debian_image.self_link
}

resource "google_compute_instance" "spot_vm_instance" {
  count        = var.instance_count
  name         = "${var.instance_name}-${count.index}"
  machine_type = var.instance_type
  zone         = var.zone
  /* tags =  toset(var.project-tags) */

  boot_disk {
    initialize_params {
      image = data.google_compute_image.debian_image.self_link
    }
  }

  scheduling {
    preemptible                 = true
    automatic_restart           = false
    provisioning_model          = "SPOT"
    instance_termination_action = "STOP"
  }

  #metadata_startup_script = data.template_file.linux-metadata.rendered

  metadata = {
    ssh-keys = "${var.user}:${file(var.publickeypath)}"
  }

  network_interface {
    network = var.network

    access_config {
      // Ephemeral public IP
    }
  }

  /* metadata_startup_script = templatefile("${path.module}/startup_script.tpl",
    {
       tailscale_key = var.tailscale_key
    }) */



  provisioner "remote-exec" {
    connection {
      #host        = google_compute_instance.spot_vm_instance.0.network_interface.0.access_config.0.nat_ip
      host = self.network_interface.0.access_config.0.nat_ip
      type = "ssh"
      # username of the instance would vary for each account refer the OS Login in GCP documentation
      user    = var.user
      timeout = "500s"
      # private_key being used to connect to the VM. ( the public key was copied earlier using metadata )
      private_key = file(var.privatekeypath)
    }

    inline = [
      "sudo apt-get update; sudo apt-get install -y apache2; sudo apt-get install -y openjdk-17-jdk; sudo systemctl start apache2; sudo systemctl enable apache2 "
    ]
  }

  lifecycle {
    create_before_destroy = true
  }
}




