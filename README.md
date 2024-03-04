# Paso test k8s:

- Install docker
- Install minikube
- Check kubectl is installed or install
- Install k9s
- Download the repo from git
- Start docker
- Start minikube
- Move to app folder
- Run:

```
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

- Run:

```
minikube tunnel
```

- Check if service es running in the right port
