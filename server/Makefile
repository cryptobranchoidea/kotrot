.DEFAULT_GOAL := help

# env
ENV_LOCAL_FILE := .env.local
ENV_LOCAL       = $(shell cat $(ENV_LOCAL_FILE))

GO           := go run

# docker
DOCKER_FILE_DIR                 := ./docker
DOCKER_COMPOSE_LOCAL            := $(DOCKER_FILE_DIR)/docker-compose.local.yml
DOCKER_COMPOSE_LOCAL_DATABASE   := $(DOCKER_FILE_DIR)/docker-compose.local.database.yml
DOCKER_COMPOSE_LOCAL_SERVER     := $(DOCKER_FILE_DIR)/docker-compose.local.server.yml
DOCKER_EXEC                     := docker exec -it
GITHUB_REPOSITORY_NAME          := fisap
DB_CONTAINER_NAME               := $(GITHUB_REPOSITORY_NAME)-database

# dir
DATA_DIR := ./database/data

# rm
RM:=rm -rf

.PHONY: up
up: ## docker環境を立ち上げる
	$(ENV_LOCAL) docker-compose \
	-f $(DOCKER_COMPOSE_LOCAL) \
	-f $(DOCKER_COMPOSE_LOCAL_DATABASE) \
	-f $(DOCKER_COMPOSE_LOCAL_SERVER) up

.PHONY: down
down: ## dockerイメージを削除し、docker環境を閉じる
	docker-compose \
	-f $(DOCKER_COMPOSE_LOCAL) \
	-f $(DOCKER_COMPOSE_LOCAL_DATABASE) \
	-f $(DOCKER_COMPOSE_LOCAL_SERVER) down \
	--rmi all --volumes --remove-orphans

.PHONY: fclean
fclean:down del-volumes ## マウントしたデータを削除、またdockerイメージも削除する

.PHONY: re
re:fclean up

.PHONY: del-volumes
del-volumes:del-data

.PHONY: del-data
del-data:
	sudo $(RM) $(DATA_DIR)

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

.PHONY: swag
swag:
	go install github.com/swaggo/swag/cmd/swag@latest
	swag init

.PHONY: push
push:
	chmod +x script/git.sh
	./script/git.sh "feat:all"