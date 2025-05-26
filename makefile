dev-server:
	hugo serve --bind 0.0.0.0

test-build:
	hugo build -e test

prod-build:
	hugo build

docker-start-local-server-with-30-second-sleep:
	docker rm -f ubuntu-ssh 2>/dev/null || true \
	&& (docker run \
		-d \
		--name ubuntu-ssh \
		-p 2222:22 \
		-e TZ="Europe/Berlin" \
		ubuntu:latest \
		bash -c "\
			apt-get update \
			&& apt-get install -y openssh-server \
			&& echo 'start' \
			&& echo 'root:password' | chpasswd \
			&& echo 'PermitRootLogin yes' >> /etc/ssh/sshd_config \
			&& service ssh start \
			&& echo 'waiting...' \
			&& tail -f /dev/null") \
	&& sleep 30 \
	&& sshpass \
		-p 'password' \
		ssh-copy-id \
			-o StrictHostKeyChecking=no \
			-o UserKnownHostsFile=/dev/null \
			-p 2222 \
			root@localhost

ansible-local-server:
	ansible-playbook -i ops/ansible/inventory.yml ops/ansible/playbooks/*.yml
