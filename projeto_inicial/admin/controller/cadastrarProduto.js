import { produtoService } from "../service/produto-service.js"


const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', (evento) => {
    
       
        evento.preventDefault()

    
       const produto = evento.target.querySelector('[data-produto]').value
       const valor = evento.target.querySelector('[data-valor]').value
       const desc = evento.target.querySelector('[data-desc]').value

 

    
       produtoService.criarProduto(produto,valor,desc)
})
