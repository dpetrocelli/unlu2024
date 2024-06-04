helm install cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --create-namespace \
  --version 1.14.5 \
  --set installCRDs=true \
  --set replicaCount=3 \
  --set-string 'extraArgs[0]=--dns01-recursive-nameservers=1.1.1.1:53\,9.9.9.9:53' \
  --set 'extraArgs[1]=--dns01-recursive-nameservers-only' \
  --set podDnsPolicy=None \
  --set 'podDnsConfig.nameservers[0]=1.1.1.1' \
  --set 'podDnsConfig.nameservers[1]=9.9.9.9'


helm upgrade --install argocd argo/argo-cd --namespace argocd --create-namespace \
  --set server.service.type=ClusterIP \
  --set server.ingress.enabled=false


#!/bin/bash

# Step 1: Create the $HOME/istio directory
mkdir -p $HOME/istio

# Step 2: Change to the $HOME/istio directory
cd $HOME/istio

# Step 3: Download and install Istio
curl -L https://istio.io/downloadIstio | sh -

# Step 4: Move to the Istio installation directory (assuming there's only one matching "istio-*")
cd istio-*

# Step 5: Move all files to $HOME/istio
mv * $HOME/istio/

# Step 6: Change back to $HOME/istio
cd $HOME/istio

# Step 7: Add Istio's bin directory to PATH
export PATH=$HOME/istio/bin:$PATH

# Step 8: Make the PATH change permanent by adding it to the appropriate profile script
echo 'export PATH=$HOME/istio/bin:$PATH' >> ~/.bashrc

# Step 9: Source the profile script to update the current terminal session (for bash)
source ~/.bashrc

# Note: For zsh users, use ~/.zshrc instead of ~/.bashrc in steps 8 and 9.

kubectl create secret generic cloudflare-token-secret \                                         INT | primary kube 
            --from-literal=cloudflare-token=_pZ1lYoV4XSfbsFe999WWDoxIOJumIkbAPG896FZ \
            --namespace cert-manager || echo " secret already exists"