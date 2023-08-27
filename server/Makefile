.PHONY: build-kube
build-kube:
	docker build -t yadon3141/fisap-app .
	cd .local-develop/manifest/app && kubectl apply -k .

.PHONY: docker-push
docker-push:
	docker build -t yadon3141/fisap-app .
	docker push yadon3141/fisap-app

.PHONY: re-kube
re-kube:
	docker build -t yadon3141/fisap-app .
	cd .local-develop/manifest/app && kubectl rollout restart deploy fisap-app