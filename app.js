quantidadeLikes = 0
quantidadeLoves = 0
quantidadeDislike = 0
//Função só é executada ao clickar no botão(olhe o HTML, criado o botão oneclick)

function adicionarLike(){
  quantidadeLikes = 1 + quantidadeLikes
  botao1.innerHTML = quantidadeLikes + " Likes"
  
}

function adicionarLove(){
  quantidadeLoves = 1 + quantidadeLoves
  botao2.innerHTML = quantidadeLoves + " Love"
  
}

function adicionarDislike() {
  quantidadeDislike = 1 + quantidadeDislike
  botao3.innerHTML = quantidadeDislike + " Dislikes"
}