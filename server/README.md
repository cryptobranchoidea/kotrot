# setup

# Docker

## ビルドする
```
make up
```

## 再ビルドする
```
make re
```

# k8s


## app用のkubeをビルドする
```
make build-kube
```

## app用のkubeを再ビルドする
```
make re-kube
```


## apiにアクセスする
minikube を使用している場合は
```
minikube service fisap-service 
```

でapiにアクセスできます。