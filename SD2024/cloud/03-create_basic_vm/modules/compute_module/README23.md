# compute_module

<!-- BEGIN_TF_DOCS -->
## Requirements

No requirements.

## Providers

| Name | Version |
|------|---------|
| <a name="provider_google"></a> [google](#provider\_google) | n/a |
| <a name="provider_template"></a> [template](#provider\_template) | n/a |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [google_compute_instance.spot_vm_instance](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance) | resource |
| [google_project_service.cloud_resource_manager](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/project_service) | resource |
| [google_project_service.compute](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/project_service) | resource |
| [google_client_openid_userinfo.me](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/client_openid_userinfo) | data source |
| [google_compute_image.debian_image](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/compute_image) | data source |
| [template_file.linux-metadata](https://registry.terraform.io/providers/hashicorp/template/latest/docs/data-sources/file) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_base_os"></a> [base\_os](#input\_base\_os) | The image to be used for creating the boot disk. | <pre>object({<br>    family  = string<br>    project = string<br><br>  })</pre> | <pre>{<br>  "family": "debian-11",<br>  "project": "debian-cloud"<br>}</pre> | no |
| <a name="input_instance_count"></a> [instance\_count](#input\_instance\_count) | n/a | `number` | `3` | no |
| <a name="input_instance_name"></a> [instance\_name](#input\_instance\_name) | The name to be used for the compute instance. | `string` | n/a | yes |
| <a name="input_instance_type"></a> [instance\_type](#input\_instance\_type) | The machine type to be associated with the compute instance. | `string` | `"n1-standard-1"` | no |
| <a name="input_network"></a> [network](#input\_network) | The URI of the VPC network to be used from the compute instance. | `string` | n/a | yes |
| <a name="input_privatekeypath"></a> [privatekeypath](#input\_privatekeypath) | n/a | `string` | `"~/.ssh/id_rsa"` | no |
| <a name="input_project-tags"></a> [project-tags](#input\_project-tags) | n/a | `map(string)` | `{}` | no |
| <a name="input_project_id"></a> [project\_id](#input\_project\_id) | n/a | `string` | n/a | yes |
| <a name="input_publickeypath"></a> [publickeypath](#input\_publickeypath) | n/a | `string` | `"~/.ssh/id_rsa.pub"` | no |
| <a name="input_user"></a> [user](#input\_user) | n/a | `string` | `"nones"` | no |
| <a name="input_zone"></a> [zone](#input\_zone) | n/a | `string` | n/a | yes |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_debian_iso"></a> [debian\_iso](#output\_debian\_iso) | n/a |
| <a name="output_external_ip"></a> [external\_ip](#output\_external\_ip) | n/a |
| <a name="output_id"></a> [id](#output\_id) | n/a |
| <a name="output_name"></a> [name](#output\_name) | n/a |
<!-- END_TF_DOCS -->
