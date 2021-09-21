module.exports = {
   "development": {
     "username": "admin",
     "password": 'PsycoInova-21',
     "database": "coralio",
     "host": "coralio.ccr63migrrcg.us-east-1.rds.amazonaws.com",
     "dialect": "mysql"
  },
  /*
  "development": {
    "username": "ferfigue14",
    "password": 'root',
    "database": "coralio",
    "host": "127.0.0.1",
    "port": "3307",
    "dialect": "mysql"
  },*/
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
