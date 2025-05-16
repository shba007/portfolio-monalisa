<p align="center">
  <img src="./public/logo.png" lt="Logo" width="80" />
<p>

# Portfolio Monalisa

> Monalisa's portfolio showcasing her experience and contacts in a visually appealing manner

<p align="center">
  <a href="https://monalisa-bairagi.betteruptime.com">
    <img src="https://uptime.betterstack.com/status-badges/v3/monitor/10ar6.svg" alt="Better Stack Badge">
  </a>
</p>

![Landing](public/previews/landing.webp)

## How to Deploy

1. Initialize Swarm on the Manager Node

```bash
docker swarm init --advertise-addr <MANAGER-IP>
```

2. Join Worker Nodes to the Swarm

```bash
docker swarm join --token <WORKER-TOKEN> <MANAGER-IP>:2377
```

3. Check Node Status

```bash
docker node ls
```

4. Create a docker volume

```bash
docker volume create \
  --name portfolio-monalisa_static \
  --driver local \
  --opt type=none \
  --opt device=~/Algostract/portfolio-monalisa/static \
  --opt o=bind
```

5. Use Docker Stack to deploy multi-container application

```bash
export $(cat .env.prod) && docker stack deploy --compose-file docker-compose.prod.yml portfolio-monalisa
```

6. Scale the service

```bash
docker service scale portfolio-monalisa_app=5
```

7. Check

```bash
docker service ls
docker service ps portfolio-monalisa_app
```
