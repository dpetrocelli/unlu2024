locals {
  linux_metadata = templatefile("${path.module}/scripts/linux-metadata.tpl", {})
}
