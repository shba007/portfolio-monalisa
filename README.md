<p align="center">
  <img src="./public/logo.png" lt="Logo" width="80" />
<p>

# Portfolio Monalisa

<p align="center">
  <a href="https://monalisa-bairagi.betteruptime.com">
    <img src="https://uptime.betterstack.com/status-badges/v3/monitor/10ar6.svg" alt="Better Stack Badge">
  </a>
</p>

![Landing](public/previews/landing.webp)

> Monalisa's portfolio showcasing her experience and contacts in a visually appealing manner

- 📦 SSR
- 🖼️ OG Tags
- 🚀 PWA
- ✋ Push Notification
- 🗂️ CMS (Notion)
- 📊 Chart
- 🤖 Automation (Email, Whatsapp)
- 🐋 Containerized
- 🪄 CI/CD (Github Action)
- ⚡️ API Route Caching
- 📐 Analytics

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
  --opt device="$(pwd)/static" \
  --opt o=bind

docker volume create \
  --name portfolio-monalisa_data \
  --driver local \
  --opt type=none \
  --opt device="$(pwd)/.data" \
  --opt o=bind
```

5. Use Docker Stack to deploy multi-container application

```bash
docker stack deploy --compose-file docker-compose.prod.yml portfolio-monalisa
```

6. Scale service

```bash
docker service scale portfolio-monalisa_app=2
```

7. Verify

```bash
docker service ls
docker service ps portfolio-monalisa_app
```
