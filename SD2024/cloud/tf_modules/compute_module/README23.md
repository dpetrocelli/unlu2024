# compute_module

<!-- BEGIN_TF_DOCS -->
## Requirements

No requirements.

## Providers

| Name | Version |
|------|---------|
| <a name="provider_google"></a> [google](#provider\_google) | n/a |
| <a name="provider_local"></a> [local](#provider\_local) | n/a |
| <a name="provider_tls"></a> [tls](#provider\_tls) | n/a |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [google_compute_autoscaler.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_autoscaler) | resource |
| [google_compute_firewall.instance_firewall](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_firewall) | resource |
| [google_compute_health_check.autohealing](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_health_check) | resource |
| [google_compute_instance_group_manager.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance_group_manager) | resource |
| [google_compute_instance_template.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance_template) | resource |
| [google_project_service.cloud_resource_manager](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/project_service) | resource |
| [google_project_service.compute](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/project_service) | resource |
| [local_file.ssh_private_key_pem](https://registry.terraform.io/providers/hashicorp/local/latest/docs/resources/file) | resource |
| [tls_private_key.ssh](https://registry.terraform.io/providers/hashicorp/tls/latest/docs/resources/private_key) | resource |
| [google_client_openid_userinfo.me](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/client_openid_userinfo) | data source |
| [google_compute_image.image](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/compute_image) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_base_os"></a> [base\_os](#input\_base\_os) | The image to be used for creating the boot disk. | <pre>object({<br>    family  = string<br>    project = string<br><br>  })</pre> | <pre>{<br>  "family": "debian-11",<br>  "project": "debian-cloud"<br>}</pre> | no |
| <a name="input_deploy_version"></a> [deploy\_version](#input\_deploy\_version) | Deployment Version | `string` | `"v1"` | no |
| <a name="input_instance_count"></a> [instance\_count](#input\_instance\_count) | n/a | `number` | `3` | no |
| <a name="input_instance_description"></a> [instance\_description](#input\_instance\_description) | Description assigned to instances | `string` | `"This template is used to create nginx-app server instances"` | no |
| <a name="input_instance_group_manager_description"></a> [instance\_group\_manager\_description](#input\_instance\_group\_manager\_description) | Description of instance group manager | `string` | `"Instance group for nginx-app server"` | no |
| <a name="input_instance_name"></a> [instance\_name](#input\_instance\_name) | The name to be used for the compute instance. | `string` | n/a | yes |
| <a name="input_instance_template_description"></a> [instance\_template\_description](#input\_instance\_template\_description) | Description of instance template | `string` | `"nginx-app server template"` | no |
| <a name="input_instance_type"></a> [instance\_type](#input\_instance\_type) | The machine type to be associated with the compute instance. | `string` | `"n1-standard-1"` | no |
| <a name="input_machine_type"></a> [machine\_type](#input\_machine\_type) | VM Size | `string` | `"e2-medium"` | no |
| <a name="input_minimum_vm_size"></a> [minimum\_vm\_size](#input\_minimum\_vm\_size) | Minimum VM size in Instance Group | `number` | `2` | no |
| <a name="input_name"></a> [name](#input\_name) | The base name of resources | `string` | `"nginx-app"` | no |
| <a name="input_network"></a> [network](#input\_network) | The URI of the VPC network to be used from the compute instance. | `string` | n/a | yes |
| <a name="input_project-tags"></a> [project-tags](#input\_project-tags) | n/a | `map(string)` | `{}` | no |
| <a name="input_project_id"></a> [project\_id](#input\_project\_id) | n/a | `string` | n/a | yes |
| <a name="input_tags"></a> [tags](#input\_tags) | Network Tags for resources | `list(any)` | <pre>[<br>  "nginx-app"<br>]</pre> | no |
| <a name="input_zone"></a> [zone](#input\_zone) | n/a | `string` | n/a | yes |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_user_info"></a> [user\_info](#output\_user\_info) | Information about the authenticated user. |
<!-- END_TF_DOCS -->
