FROM node:14-alpine AS builder
WORKDIR /builder

COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile

COPY . ./
RUN yarn build --fail-on-error

FROM node:14-alpine
RUN mkdir -p /usr/src/nuxt-app
COPY --from=builder /builder/ /usr/src/nuxt-app/
WORKDIR /usr/src/nuxt-app
EXPOSE 5000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5000

CMD ["npx", "nuxt", "start"]