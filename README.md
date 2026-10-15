<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/shba007/portfolio-monalisa/main/public/logo.png">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/shba007/portfolio-monalisa/main/public/logo.png">
    <img alt="Psychologist Portfolio Logo" src="https://raw.githubusercontent.com/shba007/portfolio-monalisa/main/public/logo.png" width="96" height="96" />
  </picture>
</p>

<h1 align="center">Psychologist Portfolio</h1>

<p align="center">
  <strong>Full-stack portfolio, practice management platform, and cross-platform desktop/mobile application for Monalisa Bairagi (RCI-Registered Clinical Psychologist).</strong>
</p>

<p align="center">
  <a href="https://monalisa-bairagi.betteruptime.com">
    <img src="https://uptime.betterstack.com/status-badges/v3/monitor/10ar6.svg" alt="Better Stack Uptime Badge" />
  </a>
  <a href="https://github.com/shba007/portfolio-monalisa/releases">
    <img src="https://img.shields.io/github/v/release/shba007/portfolio-monalisa?include_prereleases&color=98DA8B&style=flat-square" alt="GitHub Release" />
  </a>
  <a href="https://nuxt.com">
    <img src="https://img.shields.io/badge/Nuxt-4.5-00DC82?logo=nuxt.js&logoColor=white&style=flat-square" alt="Nuxt 4" />
  </a>
  <a href="https://bun.sh">
    <img src="https://img.shields.io/badge/Bun-1.4.0-black?logo=bun&logoColor=white&style=flat-square" alt="Bun 1.4" />
  </a>
  <a href="https://tauri.app">
    <img src="https://img.shields.io/badge/Tauri-v2-FFC131?logo=tauri&logoColor=black&style=flat-square" alt="Tauri v2" />
  </a>
  <a href="https://github.com/shba007/portfolio-monalisa/actions/workflows/integrate.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/shba007/portfolio-monalisa/integrate.yml?branch=develop&label=CI&style=flat-square" alt="Nuxt CI" />
  </a>
  <a href="https://github.com/shba007/portfolio-monalisa/pkgs/container/portfolio-monalisa">
    <img src="https://img.shields.io/badge/Docker-GHCR-2496ED?logo=docker&logoColor=white&style=flat-square" alt="Docker GHCR" />
  </a>
  <a href="https://github.com/shba007/portfolio-monalisa/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-GPL--3.0-blue.svg?style=flat-square" alt="License: GPL-3.0-only" />
  </a>
</p>

---

## Overview

**Psychologist Portfolio** is a multi-platform web and native application designed for Monalisa Bairagi, a Rehabilitation Council of India (RCI) registered clinical psychologist. Built on Nuxt 4 and Tauri v2, the platform provides server-side rendered web pages, offline-capable Progressive Web App (PWA) functionality, and standalone native desktop (macOS, Windows, Linux) and Android mobile apps.

The system connects directly to Notion databases as a headless CMS for dynamic workshop registration, attendee certification, clinic location directories, and client testimonials. In addition, it features algorithmic DiceBear avatar synthesis, automated Web Push and transactional email delivery via Cloud HTTP Email services, YouTube viewership analytics with Unovis data visualizations, and an embedded Model Context Protocol (MCP) server for agentic integrations.

### Features

- 🌐 **Omnichannel Multi-Platform:** Nuxt 4 SSR web application, installable PWA with offline caching, cross-platform desktop binaries (macOS ARM/Intel, Windows, Linux), and Android mobile builds (APK/AAB) via Tauri v2.
- 🗂️ **Headless CMS & Notion Sync:** Dynamic management of testimonials, workshop listings, clinic locations, and attendee certifications synchronized directly with Notion databases.
- 🎨 **Dynamic Avatars & Reactive Visuals:** Algorithmic DiceBear SVG avatar synthesis for clients, animated metric charts via Unovis, and automatic light/dark mode adaptation with Tailwind CSS.
- 🔔 **Multi-Channel Notifications:** VAPID-compliant Web Push notifications with service-worker background sync and cloud-native transactional emails via generic HTTP Email provider.
- 🤖 **Model Context Protocol (MCP) Ready:** Embedded MCP server toolkit (`@nuxtjs/mcp-toolkit`) exposing structured AI tools for pair programming and agentic workflows.
- ⚡ **High-Performance & Edge-Optimized:** SWR route caching, static asset compression, Alpine Linux Bun multi-stage containerization, and GitHub Actions multi-arch CI/CD.

---

## Visual Previews

|                                                                  Landing Page                                                                  |                                                              About & Practice                                                              |                                                                  Clinic Locations                                                                  |
| :--------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://raw.githubusercontent.com/shba007/portfolio-monalisa/main/public/previews/landing.webp" alt="Landing Preview" width="280" /> | <img src="https://raw.githubusercontent.com/shba007/portfolio-monalisa/main/public/previews/about.webp" alt="About Preview" width="280" /> | <img src="https://raw.githubusercontent.com/shba007/portfolio-monalisa/main/public/previews/locations.webp" alt="Locations Preview" width="280" /> |

---

## Architecture & Technology Stack

```text
+-------------------------------------------------------------------------------+
|                               CLIENT PLATFORMS                                |
|   +--------------------------+  +-----------------------+  +---------------+  |
|   | Web (Nuxt 4 SSR / PWA)   |  | Desktop (Tauri v2 -   |  | Mobile (Tauri |  |
|   | Vue 3 + Tailwind CSS     |  | macOS, Windows, Linux)|  | Android App)  |  |
|   +--------------------------+  +-----------------------+  +---------------+  |
+---------------------------------------+---------------------------------------+
                                        | (HTTP / REST / IPC)
                                        v
+-------------------------------------------------------------------------------+
|                             NITRO SERVER ENGINE                               |
|   +--------------------------+  +-----------------------+  +---------------+  |
|   | REST APIs (/api/*)       |  | MCP Server Toolkit    |  | SWR Route     |  |
|   | health, location, etc.   |  | @nuxtjs/mcp-toolkit   |  | Caching       |  |
|   +--------------------------+  +-----------------------+  +---------------+  |
|   | Email Automation         |  | Web Push Service      |  | Auth & Token  |  |
|   | Cloud Email (REST API)   |  | VAPID + Web-Push      |  | Middleware    |  |
|   +--------------------------+  +-----------------------+  +---------------+  |
+---------------------------------------+---------------------------------------+
                                        |
        +-------------------------------+-------------------------------+
        |                               |                               |
        v                               v                               v
+--------------------+      +-----------------------+      +--------------------+
|   NOTION CMS API   |      |   YOUTUBE & GOOGLE    |      |  LOCAL STORAGE &   |
|  * Testimonials    |      |  * Video Search v3    |      |      SERVICES      |
|  * Workshops       |      |  * Analytics Reports  |      |  * ./static (yaml) |
|  * Participants    |      |  * Viewership Metrics |      |  * ./.data (kv)    |
|  * Certificates    |      |  * OAuth2 Token Flow  |      |  * DiceBear SVG    |
+--------------------+      +-----------------------+      +--------------------+
```

| Component          | Technology                                    | Description                                                                |
| :----------------- | :-------------------------------------------- | :------------------------------------------------------------------------- |
| **Framework**      | Nuxt 4 (`^4.5.2`), Vue 3 (`latest`), Vite     | Core application framework with file-based routing and SSR                 |
| **Native Runtime** | Tauri 2 (`^2.11`), Rust (`1.77.2`)            | Cross-platform desktop & Android packaging with native auto-updates        |
| **Styling & UI**   | Tailwind CSS (`^6.14`), Nuxt Fonts, Nuxt Icon | Responsive design, system theme detection, and SVG icon collections        |
| **Visualizations** | Unovis (`@unovis/vue`, `@unovis/ts`), Splide  | YouTube viewership analytics charts and touch-friendly carousels           |
| **Avatars**        | DiceBear Core (`^10.7`), Micah Style          | Algorithmic SVG client avatar generation from testimonial names            |
| **CMS & Data**     | `@notionhq/client`, `notion-to-md`, YAML      | Dynamic content synchronization for testimonials, workshops, and locations |
| **Notifications**  | `web-push`, Cloud Email (`$fetch`)            | Service worker push notifications and cloud transactional emails           |
| **AI Integration** | `@nuxtjs/mcp-toolkit` (`^0.19.0`)             | Model Context Protocol server exposing custom tools                        |
| **Testing**        | Vitest (`^4.1.11`), Happy-DOM, k6             | Multi-project testing suite (unit & Nuxt environments) and load testing    |
| **Container & CI** | Docker (`oven/bun:1-alpine`), GitHub Actions  | Multi-stage image build, GHCR distribution, and automated version releases |

---

## Server API Reference

All REST endpoints are implemented within the Nitro server runtime under `server/api/`. Responses utilize SWR caching where indicated (`defineCachedEventHandler` with `maxAge: 3600`).

| Method   | Endpoint                                               | SWR Cache | Auth Required | Description                                                                         |
| :------- | :----------------------------------------------------- | :-------: | :-----------: | :---------------------------------------------------------------------------------- |
| `GET`    | `/api/health`                                          |    No     |      No       | Returns system health, version, build timestamp, and hostname node.                 |
| `GET`    | `/api/location`                                        |  1 hour   |      No       | Reads and parses clinic practice locations from `static/data/locations.yml`.        |
| `GET`    | `/api/testimonial`                                     |  1 hour   |      No       | Fetches consented testimonials from Notion DB and generates DiceBear avatars.       |
| `GET`    | `/api/video`                                           |  1 hour   |      No       | Queries YouTube Search API (max 6) and enriches with YouTube Analytics view trends. |
| `GET`    | `/api/workshop`                                        |  1 hour   |      No       | Lists active/completed workshops from Notion with calculated UPI payment links.     |
| `GET`    | `/api/workshop/:workshopId`                            |  1 hour   |      No       | Retrieves detailed workshop data and attended participant roster.                   |
| `GET`    | `/api/workshop/:workshopId/certificate/:participantId` |  1 hour   |      No       | Validates participant attendance and issues digital certificate metadata.           |
| `POST`   | `/api/notification/email/subscribe`                    |    No     |      No       | Subscribes an email address to updates in `data:subscription:email` storage.        |
| `POST`   | `/api/notification/email/send`                         |    No     |      No       | Dispatches email via external Cloud Email API.                                      |
| `POST`   | `/api/notification/email/:id/send`                     |    No     |      No       | Dispatches targeted email to recipient :id via external Cloud Email API.            |
| `POST`   | `/api/notification/push/subscribe`                     |    No     |      No       | Registers a Web Push subscription object in `data:subscription:notification`.       |
| `POST`   | `/api/notification/push/send`                          |    No     |      No       | Dispatches broadcast push notification to all stored VAPID subscriptions.           |
| `POST`   | `/api/notification/push/:id/send`                      |    No     |      No       | Sends targeted push notification matching client subscription auth token `id`.      |
| `DELETE` | `/api/notification/push/:id/unsubscribe`               |    No     |      No       | Removes a client push subscription from storage by auth token `id`.                 |

### Model Context Protocol (MCP) Server

The application bundles an MCP server using `@nuxtjs/mcp-toolkit`:

- **Server Name:** `Monalisa Bairagi MCP Server`
- **Version:** `1.0.0`
- **Tool Definitions:** Located under `server/mcp/tools/` (e.g. `test.ts` tool validating Zod-schema string inputs).

---

## Environment Configuration

Configuration is managed via runtime config (`nuxt.config.ts`) and loaded from environment variables (`.env`, `.env.prod`, `.env.native`).

| Variable                                  | Scope            | Required | Default                         | Description                                                                                       |
| :---------------------------------------- | :--------------- | :------: | :------------------------------ | :------------------------------------------------------------------------------------------------ |
| `NODE_ENV`                                | System           |   Yes    | `development`                   | Runtime environment (`development`, `production`).                                                |
| `PLATFORM_ENV`                            | System           | Optional | -                               | Set to `native` during Tauri desktop/mobile builds to disable SSR.                                |
| `PORT`                                    | System           | Optional | `3000`                          | Port for the local Nitro/Nuxt server.                                                             |
| `TAURI_DEV_HOST`                          | System           | Optional | `localhost`                     | Host IP/name used for Tauri HMR dev server communication.                                         |
| `NUXT_PUBLIC_SITE_URL`                    | Public           |   Yes    | -                               | Canonical public origin URL (e.g., `https://monalisa-bairagi.com`).                               |
| `NUXT_PUBLIC_SCRIPTS_GOOGLE_ANALYTICS_ID` | Public           | Optional | -                               | Google Analytics measurement ID (e.g., `G-XXXXXXXXXX`).                                           |
| `NUXT_PUBLIC_VAPID_KEY`                   | Public           |   Yes    | -                               | Public VAPID key for Web Push client subscription generation.                                     |
| `NUXT_PRIVATE_SERVER_VALIDATION_KEY`      | Private          | Optional | -                               | Secret bearer token validated by `server/middleware/auth.ts`.                                     |
| `NUXT_PRIVATE_NOTION_DB_ID`               | Private          |   Yes    | -                               | JSON object or ID mapping Notion databases (`testimonial`, `workshop`, `content`, `participant`). |
| `NUXT_PRIVATE_VAPID_KEY`                  | Private          |   Yes    | -                               | Private VAPID key used by `web-push` to sign push notifications.                                  |
| `NUXT_PRIVATE_VAPID_SUBJECT`              | Private          |   Yes    | -                               | Contact email or URL for VAPID push service identification (`mailto:...`).                        |
| `NUXT_PRIVATE_EMAIL_API_KEY`              | Private          | Optional | -                               | API authorization bearer token for Cloud Email provider (e.g. Resend).                            |
| `NUXT_PRIVATE_EMAIL_API_URL`              | Private          | Optional | `https://api.resend.com/emails` | HTTP REST endpoint URL for Cloud Email dispatch.                                                  |
| `NUXT_PRIVATE_EMAIL_FROM`                 | Private          | Optional | -                               | Sender address format (`Name <email@domain.com>`).                                                |
| `NUXT_PRIVATE_YOUTUBE_BASE_URL`           | Private          | Optional | -                               | YouTube Data API v3 base endpoint.                                                                |
| `NUXT_PRIVATE_YOUTUBE_ANALYTICS_URL`      | Private          | Optional | -                               | Google YouTube Analytics API base endpoint.                                                       |
| `NUXT_PRIVATE_YOUTUBE_CHANNEL_ID`         | Private          | Optional | -                               | YouTube Channel ID for video search and analytics.                                                |
| `NUXT_PRIVATE_YOUTUBE_API_KEY`            | Private          | Optional | -                               | YouTube Data API v3 access key.                                                                   |
| `NUXT_PRIVATE_OAUTH_CLIENT_ID`            | Private          | Optional | -                               | Google OAuth2 client ID for Analytics API authorization.                                          |
| `NUXT_PRIVATE_OAUTH_CLIENT_SECRET`        | Private          | Optional | -                               | Google OAuth2 client secret for Analytics API authorization.                                      |
| `NUXT_PRIVATE_OAUTH_REFRESH_TOKEN`        | Private          | Optional | -                               | Google OAuth2 refresh token for persistent token rotation.                                        |
| `NUXT_PRIVATE_PAYMENT_UPI_INFO`           | Private          |   Yes    | -                               | JSON containing UPI receiver info (`accountId`, `vpa`, `accountName`).                            |
| `NUXT_META_VERSION`                       | Private / Docker | Optional | -                               | Application version injected into health status during build.                                     |
| `NUXT_META_BUILD_TIME`                    | Private / Docker | Optional | -                               | Build timestamp injected into health status during build.                                         |

---

## Deployment & Docker Operations

### 1. Docker Compose (Local & Development)

The repository provides a multi-stage Dockerfile based on `oven/bun:1-alpine` and a local development compose configuration:

```bash
# Build the dev container
bun run docker:build

# Launch container with static and data bind mounts
bun run docker:start
```

Or deploy directly with Docker Compose:

```bash
docker compose up -d
```

The service binds port `4200:3000` and mounts `./static` and `./.data` volumes.

### 2. Production Deployment (Docker Stack / Swarm)

Production deployments pull pre-built images from GitHub Container Registry (`ghcr.io/shba007/portfolio-monalisa:latest`).

1. **Create required persistent host bind mounts / volumes:**

```bash
docker volume create \
  --name psychologist-portfolio_static \
  --driver local \
  --opt type=none \
  --opt device="$(pwd)/static" \
  --opt o=bind

docker volume create \
  --name psychologist-portfolio_data \
  --driver local \
  --opt type=none \
  --opt device="$(pwd)/.data" \
  --opt o=bind
```

2. **Deploy via Docker Stack:**

```bash
docker stack deploy --compose-file docker-compose.prod.yml psychologist-portfolio
```

---

<details>
<summary><strong>Local Development & Build Scripts</strong></summary>

### Prerequisites

- **Runtime:** [Bun](https://bun.sh) `^1.2.9` (recommended: `1.4.0+`) or Node.js `^22.11.0 || ^24.14.0`
- **Rust Toolchain:** `1.77.2+` (required only for Tauri desktop/mobile builds)
- **Mobile SDK:** Android SDK, NDK `29.0.13846066`, and Java 17 Temurin (required only for mobile builds)

### Installation

```bash
bun install --frozen-lockfile
```

### Development Scripts Reference

| Script               | Command                                                 | Purpose                                                        |
| :------------------- | :------------------------------------------------------ | :------------------------------------------------------------- |
| `dev`                | `nuxt dev`                                              | Start Nuxt local development server on `http://localhost:3000` |
| `build`              | `nuxt build && (cp -r static .output/static \|\| true)` | Compile SSR production server bundle into `.output`            |
| `generate`           | `nuxt generate`                                         | Pre-render static pages into `dist/`                           |
| `preview`            | `nuxt preview`                                          | Preview production build locally                               |
| `start`              | `node --env-file=.env.prod .output/server/index.mjs`    | Launch compiled Nitro production server                        |
| `tauri:dev`          | `tauri dev`                                             | Launch Tauri desktop application in development mode           |
| `tauri:build`        | `tauri build`                                           | Compile Tauri native desktop installers/binaries               |
| `tauri:dev:mobile`   | `tauri android dev`                                     | Run Tauri app on connected Android device/emulator             |
| `tauri:build:mobile` | `tauri android build`                                   | Build release Android universal APK & AAB bundles              |
| `test`               | `vitest`                                                | Run Vitest test suite                                          |
| `test:watch`         | `vitest --watch`                                        | Run Vitest in interactive watch mode                           |
| `test:coverage`      | `vitest --coverage`                                     | Generate v8 test coverage reports                              |
| `test:unit`          | `vitest --project unit`                                 | Run unit tests (`test/unit/*.test.ts`)                         |
| `test:nuxt`          | `vitest --project nuxt`                                 | Run Nuxt integration tests with Happy-DOM                      |
| `test:load`          | `k6 run test/unit/load.test.ts`                         | Run k6 API health check load benchmark                         |
| `lint`               | `eslint . --fix`                                        | Lint codebase with `@nuxt/eslint` rules                        |
| `format`             | `prettier . --write`                                    | Format code using Prettier and Tailwind plugin                 |
| `detect`             | `gitleaks git --verbose`                                | Scan git history for committed secrets                         |
| `clean`              | `nuxt cleanup && (cd src-tauri && cargo clean)`         | Clean Nuxt build cache and Cargo target artifacts              |

</details>

---

## License

Published under the [GNU General Public License v3.0 (GPL-3.0-only)](https://github.com/shba007/portfolio-monalisa/blob/main/LICENSE).

<br />

<a href="https://github.com/shba007/portfolio-monalisa/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=shba007/portfolio-monalisa" alt="Contributors" />
</a>
