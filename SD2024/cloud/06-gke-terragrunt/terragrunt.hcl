locals {
  env_vars     = yamldecode(file("${find_in_parent_folders("env.yaml")}"))
  account_vars = read_terragrunt_config(find_in_parent_folders("account.hcl"))
  aws_region   = local.env_vars["aws_region"]
  project_name = local.env_vars["project"]
  account_id   = local.env_vars["account_id"]
  environment  = local.env_vars["environment"]
  aws_profile   = local.account_vars.locals.aws_profile_name
}

terraform {
  extra_arguments "aws_profile" {
    commands = [
      "init",
      "apply",
      "refresh",
      "import",
      "plan",
      "taint",
      "untaint"
    ]

    env_vars = {
      AWS_PROFILE = "${local.aws_profile}"
    }
  }
}

generate "providers" {
  path      = "providers.tf"
  if_exists = "overwrite_terragrunt"
  contents  = <<EOF
provider "aws" {
  region = "${local.aws_region}"
  allowed_account_ids  = ["${local.account_id}"]
  default_tags {
   tags = {
      project  = "${local.project_name}"
      environment = "${local.environment}"
      terraform = "true"
   }
  }
}
EOF
}

remote_state {
  backend = "s3"
  generate = {
    path      = "backend.tf"
    if_exists = "overwrite_terragrunt"
  }
  config = {
    profile = "${local.aws_profile}"
    bucket         = "${local.environment}-${local.project_name}-terraform-state-${local.aws_region}"
    key            = "${path_relative_to_include()}/terraform.tfstate"
    region         = local.aws_region
    encrypt        = true
    dynamodb_table = "${local.environment}-${local.project_name}-terraform-lock-table"
  }
}


