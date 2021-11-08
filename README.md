# This repository shows how you can build API with microservice architecture using nestjs
## Features of this example
This example is basically an API for some task manager application. It provides a possibility to perform sign up users, confirm user's emails, manage user's tasks.
## Running the example with docker-compose
Execute `docker network create infrastructure && cp .env.example .env && docker-compose up -d` from the root of the repository
## Accessing the API itself and swagger docs for the API
- Once you launch the API it will be accessible on port 3000.
- Swagger docs for the API will be accessible locally via URI "**http://localhost:3000/api**"
## Launch services for integration testing (using docker-compose)
- Execute `sudo vim /etc/hosts` and add line `127.0.0.1 db` to it. This is a temporary step, it will not be required since new update.
- Execute `cp .env.example .env && cp .env.test.example .env.test`
- Execute `docker-compose -f ./docker-compose.test.yml up -d` from the root of the repository
- Run `cd ./gateway && npm install && npm run test` from the root of this repo
## Brief architecture overview
This API showcase consists of the following parts:
- API gateway
- Payment service - responsible for create a payment
- Product service - responsible for CRUD operations on product
- Order service - responsible for create, cancel order

This example uses a SINGLE database (mysql) instance for all microservices. **This is not a correct point, the correct way is to use a separate DB instance for every microservice.** I used one DB instance for all microservices to simplify this example.
