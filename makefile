01-dev-server:
	hugo serve --bind 0.0.0.0

02-build-test:
	hugo build -e test

03-prod-run:
	hugo serve -e production --bind 0.0.0.0

ANSIBLE_COLLECTIONS_PATH=	~/.ansible/collections
04-ansible-lint:
	ansible-playbook -i "localhost,vserver," ansible/playbooks/*.yml --syntax-check
	ansible-lint ansible/*
	yamllint ansible/*

10-docker-local-server-start:
	docker rm -f ubuntu-ssh 2>/dev/null || true \
	&& docker run \
		-it \
		--name ubuntu-ssh \
		-p 2222:22 \
		-p 8080:80 \
		-p 8443:443 \
		-e TZ=Europe/Berlin \
		-e DEBIAN_FRONTEND=noninteractive \
		ubuntu:latest \
		bash -c "\
			apt-get update \
			&& apt-get install -y openssh-server \
			&& echo 'start' \
			&& echo 'root:password' | chpasswd \
			&& echo 'PermitRootLogin yes' >> /etc/ssh/sshd_config \
			&& service ssh start \
			&& echo 'ready to authenticate...' \
			&& exec bash"

11-docker-local-server-auth:
	sshpass \
		-p 'password' \
		ssh-copy-id \
			-o StrictHostKeyChecking=no \
			-o UserKnownHostsFile=/dev/null \
			-p 2222 \
			root@localhost

12-docker-local-server-shell:
	ssh-keygen -R localhost
	ssh \
		-p 2222 \
		-o StrictHostKeyChecking=no \
		-o UserKnownHostsFile=/dev/null \
		root@localhost

13-deploy-local-test: 20-build-hugo-vserver-test 99-ansible-local

20-build-hugo-vserver-test:
	hugo build -e test --baseURL="https://test.feuerwehr-kronshagen.de/$(shell git symbolic-ref -q --short HEAD || git rev-parse --short HEAD)"

30-build-hugo-vserver-prod:
	hugo build -e production --minify --baseURL="https://feuerwehr-kronshagen.de"

80-dev-dependencies-macos:
	brew install hugo \
	&& brew install ansible \
	&& brew install ansible-lint \
	&& brew install sass/sass/sass \
	&& brew install yamllint \
  && ansible-galaxy collection install -r requirements.yml

99-build-local-test-with-branch-name:
	hugo build -e test --baseURL="https://localhost:8443/features/$(shell git rev-parse --abbrev-ref HEAD)"

99-install-ansible-dependencies:
	pip install ansible ansible-lint yamllint
	ansible-galaxy collection install -r requirements.yml

99-ansible-local:
	ansible-playbook \
  -vvv \
	-i "localhost," \
	--skip-tags "vserver" \
	--user "root" \
	-e "ansible_port=2222" \
	--private-key ~/.ssh/id_ed25519 \
	--ssh-extra-arg "-o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" \
	 ansible/playbooks/*.yml
