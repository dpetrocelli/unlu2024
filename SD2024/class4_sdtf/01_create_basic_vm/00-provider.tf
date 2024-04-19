
terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = ">=4.60.0"
    }
  }
  backend "gcs" {
  }



}


provider "google" {
  credentials = file(var.credentials_file_path)
  project     = var.project_id
  region      = var.region
  zone        = var.zone

  /* credentials = {
    private_key_id  = "my-private-key-id"
    private_key     = "-----BEGIN PRIVATE KEY-----\nmy-private-key-data\n-----END PRIVATE KEY-----\n"
    client_email    = "my-service-account-email@my-project.iam.gserviceaccount.com"
    client_id       = "my-client-id"
    type            = "service_account"
    project_id      = "my-project-id"
    client_x509_cert_url = null
    auth_uri        = null
    token_uri       = null
    auth_provider_x509_cert_url = null
  } */


}


