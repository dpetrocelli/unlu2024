# gcp-mig-lb

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
| [google_compute_backend_service.rbs](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_backend_service) | resource |
| [google_compute_firewall.default](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_firewall) | resource |
| [google_compute_global_forwarding_rule.gfr](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_global_forwarding_rule) | resource |
| [google_compute_health_check.default](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_health_check) | resource |
| [google_compute_http_health_check.default](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_http_health_check) | resource |
| [google_compute_instance_template.cit](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance_template) | resource |
| [google_compute_region_autoscaler.cras](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_region_autoscaler) | resource |
| [google_compute_region_instance_group_manager.rmig](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_region_instance_group_manager) | resource |
| [google_compute_target_http_proxy.thp](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_target_http_proxy) | resource |
| [google_compute_url_map.urlmap](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_url_map) | resource |
| [local_file.ssh_private_key_pem](https://registry.terraform.io/providers/hashicorp/local/latest/docs/resources/file) | resource |
| [tls_private_key.ssh](https://registry.terraform.io/providers/hashicorp/tls/latest/docs/resources/private_key) | resource |
| [google_client_openid_userinfo.me](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/client_openid_userinfo) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_base_instance_name"></a> [base\_instance\_name](#input\_base\_instance\_name) | n/a | `string` | `"custom-nginx"` | no |
| <a name="input_be_name"></a> [be\_name](#input\_be\_name) | Backend | `string` | `"http-backend"` | no |
| <a name="input_be_port_name"></a> [be\_port\_name](#input\_be\_port\_name) | n/a | `string` | `"http"` | no |
| <a name="input_be_protocol"></a> [be\_protocol](#input\_be\_protocol) | n/a | `string` | `"HTTP"` | no |
| <a name="input_be_session_affinity"></a> [be\_session\_affinity](#input\_be\_session\_affinity) | n/a | `string` | `"NONE"` | no |
| <a name="input_be_timeout"></a> [be\_timeout](#input\_be\_timeout) | n/a | `string` | `"10"` | no |
| <a name="input_credentials"></a> [credentials](#input\_credentials) | Creds and default location | `string` | `"../../../credentials/credentials.json"` | no |
| <a name="input_desc"></a> [desc](#input\_desc) | n/a | `string` | `"This template is used to create nginx server instances."` | no |
| <a name="input_desc_inst"></a> [desc\_inst](#input\_desc\_inst) | n/a | `string` | `"nginx Web server instance"` | no |
| <a name="input_fwr_name"></a> [fwr\_name](#input\_fwr\_name) | Firewall Rules | `string` | `"allow-http-https"` | no |
| <a name="input_gfr_name"></a> [gfr\_name](#input\_gfr\_name) | Global Forwarding Rule | `string` | `"website-forwarding-rule"` | no |
| <a name="input_gfr_portrange"></a> [gfr\_portrange](#input\_gfr\_portrange) | n/a | `string` | `"80"` | no |
| <a name="input_hc_name"></a> [hc\_name](#input\_hc\_name) | Healthcheck | `string` | `"nginx-healthcheck"` | no |
| <a name="input_hc_port"></a> [hc\_port](#input\_hc\_port) | n/a | `string` | `"80"` | no |
| <a name="input_machine_type"></a> [machine\_type](#input\_machine\_type) | n/a | `string` | `"n1-standard-1"` | no |
| <a name="input_network"></a> [network](#input\_network) | n/a | `string` | `"default"` | no |
| <a name="input_prefix"></a> [prefix](#input\_prefix) | Instance Template | `string` | `"nginx-"` | no |
| <a name="input_project"></a> [project](#input\_project) | n/a | `string` | `"double-freehold-416321"` | no |
| <a name="input_region"></a> [region](#input\_region) | n/a | `string` | `"us-east1"` | no |
| <a name="input_rmig_as_name"></a> [rmig\_as\_name](#input\_rmig\_as\_name) | RMIG Autoscaler | `string` | `"rmig-as"` | no |
| <a name="input_rmig_name"></a> [rmig\_name](#input\_rmig\_name) | Managed Instace Group | `string` | `"nginx-rmig"` | no |
| <a name="input_source_image"></a> [source\_image](#input\_source\_image) | n/a | `string` | `"custom-golden-1714059140"` | no |
| <a name="input_tags"></a> [tags](#input\_tags) | n/a | `string` | `"webserver"` | no |
| <a name="input_target_size"></a> [target\_size](#input\_target\_size) | n/a | `string` | `"3"` | no |
| <a name="input_thp_name"></a> [thp\_name](#input\_thp\_name) | n/a | `string` | `"http-proxy"` | no |
| <a name="input_urlmap_name"></a> [urlmap\_name](#input\_urlmap\_name) | n/a | `string` | `"http-lb-url-map"` | no |
| <a name="input_zone"></a> [zone](#input\_zone) | n/a | `string` | `"us-east1-b"` | no |

## Outputs

No outputs.
<!-- END_TF_DOCS -->
