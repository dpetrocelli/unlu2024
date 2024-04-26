variable "project" {
  description = "The project ID to create the VPC network in."
  type        = string
}

variable "name" {
  description = "The name to be used for the VPC network."
  type        = string
}

variable "project-tags" {
  type = map(string)
  default = {
  }
}