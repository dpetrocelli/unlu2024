# 03-create_basic_vm

hola como están
asdfa
df
asdf
ads
f

<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_google"></a> [google](#requirement\_google) | >=4.60.0 |

## Providers

No providers.

## Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_compute-engine"></a> [compute-engine](#module\_compute-engine) | ./modules/compute_module | n/a |
| <a name="module_networking"></a> [networking](#module\_networking) | ./modules/networking_module | n/a |

## Resources

No resources.

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_bucket_name"></a> [bucket\_name](#input\_bucket\_name) | n/a | `string` | `"unlu-tf-state"` | no |
| <a name="input_credentials_file_path"></a> [credentials\_file\_path](#input\_credentials\_file\_path) | Path to GCP service account credentials file | `string` | `"./SD2024/credentials/credentials.json"` | no |
| <a name="input_instance_count"></a> [instance\_count](#input\_instance\_count) | n/a | `number` | `3` | no |
| <a name="input_instance_name"></a> [instance\_name](#input\_instance\_name) | n/a | `string` | `"e2-standard-2"` | no |
| <a name="input_instance_type"></a> [instance\_type](#input\_instance\_type) | n/a | `string` | `"e2-standard-2"` | no |
| <a name="input_pepito"></a> [pepito](#input\_pepito) | n/a | `string` | `"pepito"` | no |
| <a name="input_prefix"></a> [prefix](#input\_prefix) | n/a | `string` | `"terraform/state"` | no |
| <a name="input_privatekeypath"></a> [privatekeypath](#input\_privatekeypath) | n/a | `string` | `"~/.ssh/id_rsa"` | no |
| <a name="input_project-tags"></a> [project-tags](#input\_project-tags) | n/a | `map(string)` | <pre>{<br>  "key": "unlu",<br>  "magic": "unlu2"<br>}</pre> | no |
| <a name="input_project_id"></a> [project\_id](#input\_project\_id) | n/a | `string` | `"sd-2023-384422"` | no |
| <a name="input_publickeypath"></a> [publickeypath](#input\_publickeypath) | n/a | `string` | `"~/.ssh/id_rsa.pub"` | no |
| <a name="input_region"></a> [region](#input\_region) | n/a | `string` | `"us-central1"` | no |
| <a name="input_user"></a> [user](#input\_user) | n/a | `string` | `"dmpetrocelli"` | no |
| <a name="input_vpc"></a> [vpc](#input\_vpc) | n/a | `string` | `"unlu-default-vpc2"` | no |
| <a name="input_zone"></a> [zone](#input\_zone) | n/a | `string` | `"us-central1-a"` | no |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_rescatar_output_hijovm_external_ip"></a> [rescatar\_output\_hijovm\_external\_ip](#output\_rescatar\_output\_hijovm\_external\_ip) | n/a |
| <a name="output_rescatar_output_hijovm_id"></a> [rescatar\_output\_hijovm\_id](#output\_rescatar\_output\_hijovm\_id) | n/a |
| <a name="output_rescatar_output_hijovm_name"></a> [rescatar\_output\_hijovm\_name](#output\_rescatar\_output\_hijovm\_name) | n/a |
<!-- END_TF_DOCS -->
