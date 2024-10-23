# Docker Commands Cheatsheet

## Images

List images:
```
docker images
```

Pull an image:
```
docker pull <image_name>:<tag>
```

Build an image:
```
docker build -t <image_name>:<tag> <path_to_dockerfile>
```

Remove an image:
```
docker rmi <image_name>:<tag>
```

## Containers

Run a container:
```
docker run [OPTIONS] <image_name>:<tag>
```
Common options:
  -d            Run in detached mode
  -p <host_port>:<container_port>   Port mapping
  --name <container_name>           Assign a name to the container
  -v <host_path>:<container_path>   Volume mapping

List running containers:
```
docker ps
```

List all containers (including stopped):
```
docker ps -a
```

Stop a container:
```
docker stop <container_id_or_name>
```

Start a stopped container:
```
docker start <container_id_or_name>
```

Remove a container:
```
docker rm <container_id_or_name>
```

View container logs:
```
docker logs <container_id_or_name>
```

Execute a command in a running container:
```
docker exec -it <container_id_or_name> <command>
```

## Docker Compose

Start services: For single docker-compose.yaml file
```
docker-compose up -d
```

Start services: For multiple docker-compose.yaml files in one parent folder
```
docker-compose -f <selected_docker_compose_yml_file> up -d
```

Stop services:
```
docker-compose down
```

Stop services: For multiple docker-compose.yaml files in one parent folder
```
docker-compose -f <selected_docker_compose_yml_file> down
```

Start container:
```
docker-compose start
```

Start container: For multiple docker-compose.yaml files in one parent folder
```
docker-compose -f <selected_docker_compose_yml_file> start

```

Stop container:
```
docker-compose stop
```

Stop container: For multiple docker-compose.yaml files in one parent folder
```
docker-compose -f <selected_docker_compose_yml_file> stop
```

Restart services:
```
docker-compose restart
```

Restart services: For multiple docker-compose.yaml files in one parent folder
```
docker-compose -f <selected_docker_compose_yml_file> restart
```

View logs of services:
```
docker-compose logs
```

## System & Maintenance

View Docker system info:
```
docker info
```

Remove all unused objects:
```
docker system prune
```

View resource usage:
```
docker stats
```

## Networking

List networks:
```
docker network ls
```

Create a network:
```
docker network create <network_name>
```

Connect a container to a network:
```
docker network connect <network_name> <container_id_or_name>
```

## Volumes

List volumes:
```
docker volume ls
```

Create a volume:
```
docker volume create <volume_name>
```

Remove a volume:
```
docker volume rm <volume_name>
```
