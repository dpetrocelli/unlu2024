# # Then, you can use `local.linux_metadata` wherever you need the rendered template.
# resource "google_compute_instance" "instances" {
#   count        = var.instance_count
#   name         = "${var.instance_name}-${count.index}"
#   machine_type = var.instance_type
#   zone         = var.zone
#   /* tags =  toset(var.project-tags) */

#   boot_disk {
#     initialize_params {
#       image = data.google_compute_image.image.self_link
#     }
#   }

#   scheduling {
#     preemptible                 = true
#     automatic_restart           = false
#     provisioning_model          = "SPOT"
#     instance_termination_action = "STOP"
#   }

#   metadata_startup_script = local.linux_metadata

#   metadata = {
#     ssh-keys = "${split("@", data.google_client_openid_userinfo.me.email)[0]}:${tls_private_key.ssh.public_key_openssh}"
#   }

#   network_interface {
#     network = var.network

#     access_config {
#       // Ephemeral public IP
#     }
#   }


#   lifecycle {
#     create_before_destroy = true
#   }
# }




