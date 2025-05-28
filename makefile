01-dev-server:
	hugo serve --bind 0.0.0.0

02-test-build:
	hugo build -e test

04-prod-build:
	hugo build

05-docker-local-server-start:
	docker rm -f ubuntu-ssh 2>/dev/null || true \
	&& docker run \
		--name ubuntu-ssh \
		-p 2222:22 \
		-p 8080:80 \
		-e TZ="Europe/Berlin" \
		ubuntu:latest \
		bash -c "\
			apt-get update \
			&& apt-get install -y openssh-server \
			&& echo 'start' \
			&& echo 'root:password' | chpasswd \
			&& echo 'PermitRootLogin yes' >> /etc/ssh/sshd_config \
			&& service ssh start \
			&& echo 'ready to authenticate...' \
			&& tail -f /dev/null"

06-docker-local-server-auth:
	sshpass \
		-p 'password' \
		ssh-copy-id \
			-o StrictHostKeyChecking=no \
			-o UserKnownHostsFile=/dev/null \
			-p 2222 \
			root@localhost

07-ansible-local-server:
	ansible-playbook -v -i ansible/inventory.yml ansible/playbooks/2-webserver.yml
