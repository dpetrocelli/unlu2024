#!/bin/bash
# Delete all Argo CD Applications
kubectl get applications -n argocd -o name | xargs -I {} kubectl delete {} --namespace=argocd --grace-period=0 --force 

# Delete all Argo CD AppProjects
kubectl get appprojects -n argocd -o name | xargs -I {} kubectl delete {} --namespace=argocd --grace-period=0 --force 

echo "All Argo CD applications and projects have been deleted."
