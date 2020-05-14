const express = require('express');
const app = express();  
const cors = require('cors')


const bodyParser = require('body-parser');
const port = 41890; //porta padrão
const mysql = require('mysql');

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);



//inicia o servidor


app.listen(port);

router.use(cors())
console.log('API funcionando!');
teste = execSQLQuery('SELECT * FROM modulo');
console.log(teste);

function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
      host     : 'mysql669.umbler.com',
      port     : 41890,
      user     : 'admin_suporte',
      password : '1q2w3e4r',
      database : 'ws_niveis_fkn'
    });
  
    connection.query(sqlQry, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
  }



router.get('/modulo/:idModulo?', (req, res) =>{
  
    let filter = '';
    if(req.params.idModulo) filter = ' WHERE idModulo=' + parseInt(req.params.idModulo);
    execSQLQuery('SELECT * FROM modulo' + filter, res);
    
})

router.get('/modulo/subModulos/:idModulo?', (req, res) =>{
  let filter = '';
  if(req.params.idModulo) filter = ' and modulo.idModulo=' + parseInt(req.params.idModulo);
  execSQLQuery('SELECT * FROM modulo_acesso INNER JOIN modulo ON modulo.idModulo = idModuloFK ' + filter, res);

})

router.get('/modulo/subModulos', (req, res) =>{
  let filter = '';
  //if(req.params.idModulo) filter = ' and modulo.idModulo=' + parseInt(req.params.idModulo);
  execSQLQuery('SELECT * FROM modulo_acesso INNER JOIN modulo ON modulo.idModulo = idModuloFK ' + filter, res);

})

router.get('/modulo_acesso/listAll', (req, res) =>{
  let filter = '';
  //if(req.params.idModuloAcesso) filter = ' WHERE idModuloAcesso=' + parseInt(req.params.idModuloAcesso);
  execSQLQuery('SELECT * FROM modulo_acesso INNER JOIN modulo ON modulo.idModulo = idModuloFK ', res);
  filter = "";
})


router.get('/modulo_acesso/:idModuloAcesso?', (req, res) =>{
  let filter = '';
  if(req.params.idModuloAcesso) filter = ' WHERE idModuloAcesso=' + parseInt(req.params.idModuloAcesso);
  execSQLQuery('SELECT * FROM modulo_acesso' + filter, res);
})


