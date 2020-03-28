const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
* Rota / recurso
*/

/**
* Métodos HTTP:
*
* GET: Buscar/listar uma informção do back-end
  POST: Cruar yna ubfirnçao no back-end
  PUT: Alterar uma informação no back-end
  DELETE: Deletar uma informação no back-end
*/

/**
*Tipos de parâmetros:
*
* Query: Parâmetros nomeados enviados na rota após "?" (filtros/paginação) Ex: /users/?name=Pedro&idade=23
* Route Params: Parâmetros utilizados para identificar recursos (:id) Ex: /users/:id
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/**
** SQL: Mysql, slqlite, postgreslq, oracle, miscoft sql server
* NoSql: MongoDB, CouchDB, etc
*/

/*
  Driver: SELECT * FROM users
  Query Builder: table('users').select('*').where() //knex

*/



app.listen(3333);
