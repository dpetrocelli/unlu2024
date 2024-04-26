
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
variable "instance_name" {
  description = "The name to be used for the compute instance."
  type        = string
}

variable "network" {
  description = "The URI of the VPC network to be used from the compute instance."
  type        = string
}

variable "instance_type" {
  description = "The machine type to be associated with the compute instance."
  type        = string
  default     = "n1-standard-1"
}

variable "base_os" {
  description = "The image to be used for creating the boot disk."
  type = object({
    family  = string
    project = string

  })

  default = {
    family  = "debian-11"
    project = "debian-cloud"
  }
}

variable "project-tags" {
  type = map(string)
  default = {
  }
}

variable "zone" {
  type = string

}

variable "project_id" {
  type = string

}

variable "instance_count" {
  type    = number
  default = 3
}

# variable "privatekeypath" {
#   type      = string
#   default   = "~/.ssh/id_rsa"
#   sensitive = true
# }

# variable "publickeypath" {
#   type      = string
#   default   = "~/.ssh/id_rsa.pub"
#   sensitive = true
# }

# variable "user" {
#   type    = string
#   default = "nones"
# }

