variable "region" {
  type    = string
  default = "us-east1"
}

variable "zone" {
  type    = string
  default = "us-east1-b"
}

variable "credentials_file_path" {
  description = "Path to GCP service account credentials file"
  default     = "../../../credentials/credentials.json"
}

variable "project_id" {
  type    = string
  default = "double-freehold-416321"
}
