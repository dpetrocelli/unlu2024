#!/bin/bash
#[STEP 0] - Check or create ssh key file

echo "Checking sshkey! "
sshkey_name=$HOME/.ssh/gcp
if [ -f "$sshkey_name" ]
then
    echo "SSH Key already exists"
else
   echo "Key not found"
   ssh-keygen -f $sshkey_name -t rsa -N '' -C "dmpetrocelli@gmail.com"
   ssh-add $sshkey_name
fi


filepath=/home/david/Documents/GitHub/unlu/unlu-content/sd/main_concepts/10_google_iac/10_00_credentials/terraform.json
bucket_name="unlu-tf-state"
prefix="gke/state"

terraform init --reconfigure --var credentials_file_path=$filepath \
    --backend-config bucket=$bucket_name \
    --backend-config prefix=$prefix \
    --backend-config credentials=$filepath

terraform validate 

#terraform plan --var credentials_file_path=$filepath

#terraform apply --auto-approve  --var credentials_file_path=$filepath -lock=false

terraform destroy --auto-approve  --var credentials_file_path=$filepath -lock=false

