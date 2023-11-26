## Description

Teste Brain Agriculture

## Installation

Need to install docker and docker-compose on local machine.

```
https://docs.docker.com/engine/install/
https://docs.docker.com/compose/install/
```

## Running the database

Build the image.
Once downloaded or clone de repository, must run the following commands on root of project.

```bash
$ docker compose up
```

These commands should start pgAdmin on port 16543, and postgres database on default port 5432.

## Running the app

Run the migrations

```bash
$ node ace migration:run
```

Populate the database with some sample data

```bash
$ node ace db:seed --files "./database/seeders/State.ts"
$ node ace db:seed --files "./database/seeders/City.ts"
$ node ace db:seed --files "./database/seeders/Farmer.ts"
$ node ace db:seed --files "./database/seeders/Farm.ts"
$ node ace db:seed --files "./database/seeders/Crop.ts"
```

Run the application on port 3333

```bash
$ node ace serve
```

## Test

```bash
# unit tests
$ yarn run test

# test coverage
$ yarn run test:cov
```
## Stay in touch

- Author - [Luiz Claudio](https://www.linkedin.com/in/luiz-claudio-de-holanda/)