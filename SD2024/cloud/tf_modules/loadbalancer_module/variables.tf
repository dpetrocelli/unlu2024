variable "prefix" {
  description = "Prefix for resource names"
  type        = string
  default     = "lb-"
}

variable "instance_ids" {
  description = "List of instance IDs to add to the instance group"
  type        = list(string)
}

variable "zone" {
  description = "Zone where the load balancer resources will be created"
  type        = string
}

variable "network" {
  description = "Network where the firewall rule will be created"
  type        = string
}

variable "name" {
  type        = string
  description = "The base name of resources"
  default     = "nginx-app"
}
