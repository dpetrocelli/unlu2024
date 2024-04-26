resource "google_compute_firewall" "instance_firewall" {
  name    = "instance-firewall"
  network = var.network

  allow {
    protocol = "tcp"
    ports    = ["80"]
  }

  // The source ranges below are for Google's global load balancers
  source_ranges = ["130.211.0.0/22", "35.191.0.0/16"]
  target_tags   = ["instance-group"]
}

