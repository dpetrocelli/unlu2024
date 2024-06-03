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

