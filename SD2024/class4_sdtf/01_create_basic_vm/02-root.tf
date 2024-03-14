module "compute-engine" {
  source         = "./modules/compute_module"
  instance_name  = var.instance_name
  instance_type  = var.instance_type
  project-tags   = var.project-tags
  network        = module.networking.vpc_network
  zone           = var.zone
  project_id     = var.project_id
  instance_count = var.instance_count
  privatekeypath = var.privatekeypath
  publickeypath  = var.publickeypath
  user           = var.user
}

module "networking" {
  source       = "./modules/networking_module"
  name         = var.vpc
  project      = var.project_id
  project-tags = var.project-tags
}
