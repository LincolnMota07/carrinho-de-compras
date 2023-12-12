let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar() {
    //recuperar valores, nome do produto, quantidade e valor.
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidadeProduto = document.getElementById('quantidade').value;
    //validar a quantidade
    if(isNaN(quantidadeProduto) || quantidadeProduto <= 0) {
        alert('Por favor insira uma quantidade válida maior que zero.')
        return; //sair da função se a quantidade não for válida
    }
    //calcular o preço, e o subtotal
    let preco = parseFloat(quantidadeProduto * valorUnitario);
    let carrinho = document.getElementById('lista-produtos');
    //adicionar no carrinho
    carrinho.innerHTML =  carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`
    //atualizar valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
    


}

function limpar(){
    //resetar os valores
    let totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';

}