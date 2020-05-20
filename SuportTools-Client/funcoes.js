

function listAllniveis() {
  
  axios.get('http://suportetools-com-br.umbler.net/modulo_acesso/listAll')

.then(response => criaListaDinamica(response.data))
.catch(error => console.log(error))
const criaListaDinamica = ( modulo ) => {
const divModulos = document.getElementById('modulos_div')
const divModulos_Acessos = document.getElementById('modulos_div')



guardado = "";
divCriar = true;
modulo.map(modulo => {
  
  
  const listModulo = document.createElement('tr')
  listModulo.className = "modulo";
  const listModulo_Acesso = document.createElement('tr')
  listModulo_Acesso.className = "modulo_acesso";
  
  
  

  if (modulo.descricao != guardado){
    
      listModulo.id = modulo.idModuloFK
      listModulo.innerHTML =  '<td>'+ modulo.descricao + '</td>'
       
      divModulos.appendChild(listModulo)   
    
  }

  guardado =  modulo.descricao;
  listModulo_Acesso.id = modulo.idModuloFK
  listModulo_Acesso.innerHTML =  '<td>'+ modulo.desc + '</td>' 
  divModulos_Acessos.appendChild(listModulo_Acesso)  
})
}
}

function buscarRejeicao() {
  console.log("cheguei")
  
}
