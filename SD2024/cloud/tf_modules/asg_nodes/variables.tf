variable "project" {
  type        = string
  description = "Google Cloud Platform Project ID"
  default     = "double-freehold-416321"
}

variable "region" {
  type        = string
  description = "Infrastructure Region"
  default     = "us-east1"
}

variable "project_name" {
  type        = string
  description = "Project Name"
  default     = "my-test-project"
}

variable "zone" {
  type        = string
  description = "Zone"
  default     = "us-east1-b"
}

variable "name" {
  type        = string
  description = "The base name of resources"
  default     = "nginx-app"
}

variable "deploy_version" {
  type        = string
  description = "Deployment Version"
  default     = "v1"
}

variable "image" {
  type        = string
  description = "VM Image for Instance Template"
  default     = "ubuntu-os-cloud/ubuntu-2204-lts"
}

variable "tags" {
  type        = list(any)
  description = "Network Tags for resources"
  default     = ["nginx-app"]
}

variable "machine_type" {
  type        = string
  description = "VM Size"
  default     = "e2-medium"
}

variable "network" {
  type        = string
  description = "Network Name"
  default     = "default"
}

variable "subnet" {
  type        = string
  description = "Subnet Name"
  default     = "default"
}

variable "minimum_vm_size" {
  type        = number
  description = "Minimum VM size in Instance Group"
  default     = 2
}

variable "instance_description" {
  type        = string
  description = "Description assigned to instances"
  default     = "This template is used to create nginx-app server instances"
}

variable "instance_group_manager_description" {
  type        = string
  description = "Description of instance group manager"
  default     = "Instance group for nginx-app server"
}

variable "instance_template_description" {
  type        = string
  description = "Description of instance template"
  default     = "nginx-app server template"
}
