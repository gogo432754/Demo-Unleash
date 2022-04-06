# Unleash-demo

## Requirements
- Docker (preferably version 4.3.2 )
- postgres 
- vue 2
- IDE
- npm

## Docker setup

```
create a docker network: 
docker network create unleashnet

Start a postgres database:
docker run -e POSTGRES_PASSWORD=some_password \
  -e POSTGRES_USER=unleash_user -e POSTGRES_DB=unleash \
  --network unleashnet --name postgres2 -p 5001:5432 postgres

Start Unleash via docker:
docker run -p 4242:4242 \
  -e DATABASE_HOST=postgres2 -e DATABASE_NAME=unleash \
  -e DATABASE_USERNAME=unleash_user -e DATABASE_PASSWORD=some_password \
  -e DATABASE_SSL=false \
  --network unleashnet unleashorg/unleash-server

In a web browser navigate to:
localhost:4242
and login using username:admin, password:unleash4all

Navigate to API access page: Configure > API access
Create API token (Enviroment: development) and save a copy

Run Unleash via docker:
docker run \
   -e UNLEASH_PROXY_CLIENT_KEYS=some-secret \
   -e UNLEASH_URL='http://host.docker.internal:4242/api/' \
   -e UNLEASH_API_TOKEN="<API token>" \
   -p 3000:3000 \
   unleashorg/unleash-proxy 

Create a new feature toggle in projects/default named new-design.

In development-tab you can choose the strategy for which the value of new-design is true

npm install
```
## install dependencies
```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
