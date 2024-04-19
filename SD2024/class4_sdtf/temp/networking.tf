# resource "google_compute_firewall" "allow_ssh" {
#   name          = "allow-ssh"
#   network       = "default"
#   target_tags   = ["allow-ssh"] // this targets our tagged VM
#   source_ranges = ["0.0.0.0/0"]

#   allow {
#     protocol = "tcp"
#     ports    = ["22"]
#   }
# }

# resource "google_compute_firewall" "allow_http" {
#   name          = "allow-http"
#   network       = "default"
#   target_tags   = ["allow-http"] // this targets our tagged VM
#   source_ranges = ["0.0.0.0/0"]

#   allow {
#     protocol = "tcp"
#     ports    = ["80"]
#   }
# }
