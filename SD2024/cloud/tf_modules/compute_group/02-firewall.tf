resource "google_compute_firewall" "this" {
  name    = "${var.name}-allow-healthcheck"
  network = var.network

  allow {
    protocol = "tcp"
    ports    = ["80"]
  }

  priority      = 1000
  source_ranges = ["35.191.0.0/16", "130.211.0.0/22"]
  target_tags   = var.tags
}

resource "google_compute_firewall" "ssh" {
  name    = "${var.name}-allow-ssh"
  network = var.network

  allow {
    protocol = "tcp"
    ports    = ["22"]
  }

  priority      = 1010
  source_ranges = ["190.210.32.17/32"]
  target_tags   = var.tags
}
