terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = ">=5.26.0"
    }
  }
  backend "gcs" {
  }
  # required_version = ">= 1.7.5"
}

provider "google" {
  credentials = var.GOOGLE_APPLICATION_CREDENTIALS
  project     = var.project_id
  region      = var.region
  zone        = var.zone
}
