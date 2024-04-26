
variable "region" {
  type        = string
  description = "Infrastructure Region"

}

variable "zone" {
  type        = string
  description = "Zone"

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

# variable "image" {
#   type        = string
#   description = "VM Image for Instance Template"
#   default     = "nginx-app-vm-image"
# }

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
