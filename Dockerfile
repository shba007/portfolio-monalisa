FROM oven/bun:1-alpine@sha256:5acc90a93e91ff07bf72aa90a7c9f0fa189765aec90b47bdbf2152d2196383c0 AS builder

WORKDIR /app

COPY package.json bun.lock ./
COPY nuxt.config.ts ./

ENV NITRO_PRESET=bun
ENV NUXT_PUBLIC_SITE_URL=$SITE_URL

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

FROM oven/bun:1-alpine@sha256:5acc90a93e91ff07bf72aa90a7c9f0fa189765aec90b47bdbf2152d2196383c0 AS runner

ARG VERSION
ARG BUILD_TIME

WORKDIR /app

COPY --from=builder /app/.output ./.output
COPY --from=builder /app/node_modules/@emotion ./.output/server/node_modules/@emotion

ENV NODE_ENV=production
ENV NUXT_APP_VERSION=$VERSION
ENV NUXT_APP_BUILD_TIME=$BUILD_TIME

EXPOSE 3000

ENTRYPOINT ["bun", ".output/server/index.mjs"]