#!/bin/bash
#[STEP 0] - Check or create ssh key file

echo "Checking sshkey! "
sshkey_name=$HOME/.ssh/gcp
if [ -f "$sshkey_name" ]
then
    echo "SSH Key already exists "
else
   echo "Key not found"
   ssh-keygen -f $sshkey_name -t rsa -N '' -C "dmpetrocelli@gmail.com"
   ssh-add $sshkey_name
fi


filepath="../../credentials/credentials.json"

bucket_name="tf-state"
prefix="terraform/state"

terraform init --reconfigure --var credentials_file_path=$filepath \
    --backend-config bucket=$bucket_name \
    --backend-config prefix=$prefix \
    --backend-config credentials=$filepath

terraform validate 

#terraform plan --var credentials_file_path=$filepath --var privatekeypath="~/.ssh/gcp" --var publickeypath="~/.ssh/gcp.pub" --var instance_count="2"

#terraform apply --auto-approve  --var credentials_file_path=$filepath --var privatekeypath="~/.ssh/gcp" --var publickeypath="~/.ssh/gcp.pub" --var instance_count="1"

#terraform destroy --auto-approve  --var credentials_file_path=$filepath --var privatekeypath="~/.ssh/gcp" --var publickeypath="~/.ssh/gcp.pub"

