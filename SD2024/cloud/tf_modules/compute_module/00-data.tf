data "google_client_openid_userinfo" "me" {}
data "google_compute_image" "image" {
  family  = var.base_os.family
  project = var.base_os.project
}
