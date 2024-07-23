let valorTotalCarrinho = 1400;

function adicionar() {
    let produtoSelecionado = document.getElementById('produto').value;
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let valorProduto = parseInt(produtoSelecionado.slice(produtoSelecionado.indexOf('$') + 1, produtoSelecionado.length));
    let nomeProduto = produtoSelecionado.slice(0, produtoSelecionado.indexOf(' -'));
    let valorTotalProduto = valorProduto * quantidade;

    valorTotalCarrinho += valorTotalProduto;

    if(quantidade <= 0) {
        alert('Verifique a quantidade selecionada, não pode ser menor que 1.')
    } else {

        let listaProdutos = document.getElementById('lista-produtos');
        listaProdutos.innerHTML += `<section class="carrinho__produtos__produto">
                                        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorTotalProduto}</span>
                                    </section>`
        
        let valorCarrinho = document.getElementById('valor-total');
        valorCarrinho.textContent = `R$${valorTotalCarrinho}`;
        document.getElementById('quantidade').value = 0
    }
}

function limpar() {
    valorTotalCarrinho  = 0
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}