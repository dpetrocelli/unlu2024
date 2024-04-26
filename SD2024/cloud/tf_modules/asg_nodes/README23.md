# asg_nodes

<!-- BEGIN_TF_DOCS -->
## Requirements

No requirements.

## Providers

| Name | Version |
|------|---------|
| <a name="provider_google"></a> [google](#provider\_google) | n/a |
| <a name="provider_google-beta"></a> [google-beta](#provider\_google-beta) | n/a |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [google-beta_google_compute_instance_group_manager.this](https://registry.terraform.io/providers/hashicorp/google-beta/latest/docs/resources/google_compute_instance_group_manager) | resource |
| [google_compute_autoscaler.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_autoscaler) | resource |
| [google_compute_backend_service.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_backend_service) | resource |
| [google_compute_firewall.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_firewall) | resource |
| [google_compute_global_address.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_global_address) | resource |
| [google_compute_global_forwarding_rule.http](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_global_forwarding_rule) | resource |
| [google_compute_health_check.autohealing](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_health_check) | resource |
| [google_compute_http_health_check.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_http_health_check) | resource |
| [google_compute_instance_template.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance_template) | resource |
| [google_compute_target_http_proxy.http](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_target_http_proxy) | resource |
| [google_compute_url_map.http](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_url_map) | resource |
| [google_compute_instance_template.generic](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/compute_instance_template) | data source |
| [google_compute_network.network](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/compute_network) | data source |
| [google_compute_subnetwork.subnet](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/compute_subnetwork) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_deploy_version"></a> [deploy\_version](#input\_deploy\_version) | Deployment Version | `string` | `"v1"` | no |
| <a name="input_image"></a> [image](#input\_image) | VM Image for Instance Template | `string` | `"ubuntu-os-cloud/ubuntu-2204-lts"` | no |
| <a name="input_instance_description"></a> [instance\_description](#input\_instance\_description) | Description assigned to instances | `string` | `"This template is used to create nginx-app server instances"` | no |
| <a name="input_instance_group_manager_description"></a> [instance\_group\_manager\_description](#input\_instance\_group\_manager\_description) | Description of instance group manager | `string` | `"Instance group for nginx-app server"` | no |
| <a name="input_instance_template_description"></a> [instance\_template\_description](#input\_instance\_template\_description) | Description of instance template | `string` | `"nginx-app server template"` | no |
| <a name="input_machine_type"></a> [machine\_type](#input\_machine\_type) | VM Size | `string` | `"e2-medium"` | no |
| <a name="input_minimum_vm_size"></a> [minimum\_vm\_size](#input\_minimum\_vm\_size) | Minimum VM size in Instance Group | `number` | `2` | no |
| <a name="input_name"></a> [name](#input\_name) | The base name of resources | `string` | `"nginx-app"` | no |
| <a name="input_network"></a> [network](#input\_network) | Network Name | `string` | `"default"` | no |
| <a name="input_project"></a> [project](#input\_project) | Google Cloud Platform Project ID | `string` | `"double-freehold-416321"` | no |
| <a name="input_project_name"></a> [project\_name](#input\_project\_name) | Project Name | `string` | `"my-test-project"` | no |
| <a name="input_region"></a> [region](#input\_region) | Infrastructure Region | `string` | `"us-east1"` | no |
| <a name="input_subnet"></a> [subnet](#input\_subnet) | Subnet Name | `string` | `"default"` | no |
| <a name="input_tags"></a> [tags](#input\_tags) | Network Tags for resources | `list(any)` | <pre>[<br>  "nginx-app"<br>]</pre> | no |
| <a name="input_zone"></a> [zone](#input\_zone) | Zone | `string` | `"us-east1-b"` | no |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_Loadbalancer-IPv4-Address"></a> [Loadbalancer-IPv4-Address](#output\_Loadbalancer-IPv4-Address) | n/a |
<!-- END_TF_DOCS -->
