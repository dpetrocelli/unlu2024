variable "region" {
  type    = string
  default = "us-central1"
}

variable "zone" {
  type    = string
  default = "us-central1-a"
}

/* variable "credentials_file_path" {
  description = "Path to GCP service account credentials file"
  default     = "./terraform.json"
} */

variable "project_id" {
  type    = string
  default = "sd-2023-384422"
}
