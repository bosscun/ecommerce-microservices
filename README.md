# This repository present a simple ecomerce service in microsevice struture with 3 services : Product, Order and Payment service
## Running the example with docker-compose
Execute `docker network create infrastructure && cp .env.example .env && docker-compose up -d` from the root of the repository
## Accessing the API itself and swagger docs for the API
- Once you launch the API it will be accessible on port 3000.
- Swagger docs for the API will be accessible locally via URI "**http://localhost:3000/api**"
## Brief architecture overview
This API showcase consists of the following parts:
- API gateway
- Payment service - responsible for create a payment
- Product service - responsible for CRUD operations on product
- Order service - responsible for create, cancel order

This example uses a SINGLE database (mysql) instance for all microservices. **This is not a correct point, the correct way is to use a separate DB instance for every microservice.** I used one DB instance for all microservices to simplify this example.
