const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**Métodos Http:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação do front-end
 * PUT: Alterar uma informção no back-end
 * DELETE: Deletar uma informação no back-end
 * -------------------------------------------
 * 
 * Tipos de parâmetros:
 * 
 * Query Params:Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Resquest Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */



app.listen(3333);