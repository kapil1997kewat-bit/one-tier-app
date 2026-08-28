# Argo CD setup

1. Install Argo CD in your cluster:

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

2. Access the Argo CD UI:

```bash
kubectl port-forward svc/argocd-server -n argocd 8000:443
```

Then open: http://localhost:8000

3. Get the admin password:

```bash
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
```

4. Update the Git repository URL in `argocd/application.yaml`.

5. Apply the app:

```bash
kubectl apply -f argocd/application.yaml
```
