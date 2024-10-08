document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = "R$0";

let totalGeral = 0;

function adicionar() {
  // Recuperar os valores nome, quantidade e valor
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let valorUnitario = parseFloat(produto.split('R$')[1]);
  let quantidade = parseInt(document.getElementById('quantidade').value);

  // Verificar se a quantidade é maior que zero
  if (quantidade <= 0) {
    alert('A quantidade deve ser maior que zero.');
    return;
  }

  // Calcular o subtotal
  let subtotal = quantidade * valorUnitario;

  // Adicionar ao carrinho
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
</section>`;

  // Atualizar o valor total
  totalGeral += subtotal;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.innerHTML = `R$ ${totalGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  

  // Limpar campo de quantidade toda vez que clicar em adicionar
  document.getElementById('quantidade').value = 0;
}

function limpar() {
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$0';
}

