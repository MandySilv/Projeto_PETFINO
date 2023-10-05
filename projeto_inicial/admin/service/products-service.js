
const cadastrarProduto = () => {

    return fetch(`http://localhost:3000/profile`)
  
    .then(resposta => {

       return resposta.json()
    })   
 }
 

 const criarProduto = (produto,valor,desc) => {
   
    return fetch(`http://localhost:3000/products`, {
       method: 'POST', 
       headers: {
          'Content-type' : 'application/json' 
       },

       body: JSON.stringify({
          produto: produto,
          valor: valor,
          desc: desc
       })
    })

    .then(resposta => {
   
       return resposta.json();
    })
 }
 
 
 const removeProduto = (id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
       method: 'DELETE'
    })
 } 
 
 const detalhaProduto = (id) => {
    return fetch(`http://localhost:3000/products/${id}`)
    .then(resposta => {
       return resposta.json()
    })
 }
 
 const atulizaProduto = (id, produto) => {
    return fetch(`http://localhost:3000/products/${id}`,{
       method: 'PUT',
       headers: {
          'Content-type' : 'application/json'
       },
       body: JSON.stringify({
          produto: produto,
          
       })
    })
    .then(resposta => {
       return resposta.json()
    })
 }
 
 export const produtoService = {
    cadastrarProduto,
    criarProduto,
    removeProduto,
    detalhaProduto,
    atulizaProduto  
 }
 