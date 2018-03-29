# Addressbook api

Nice features to notice
- 100% coverage
- functional
- composed middlewares instead of global ones 
- typescript everywhere with `noImplicitAny` and `strictNullChecks`
- tslint + prettier + tsc to keep codebase clean
- easy to distinguish imported node_modules and absolute imports thanks to `~/`
- docker for database

## How to run

```bash
# create docker container 
docker-compose up

# migrate database
make db-migrate

# add example data to database (optional)
make db-seed

# start server
make run
```

and for tests

```bash
make db-reset && make db-seed && make test-coverage
```

## Docs

https://addressbookftw.docs.apiary.io/

## Live version

http://addressbook-api-backend-ftw.herokuapp.com/
