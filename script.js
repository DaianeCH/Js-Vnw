//1 - crie uma função que exiba uma mensagem no console //

  let mensagem =  "Algoritmos me deixam com dor de cabeça"
  console.log(mensagem)

//2 - crie uma função que receba o seu nome como parâmetro e exiba no console

  function mostrarNome(Nome){
  console.log(`Meu nome é ${Nome}`)
}
  mostrarNome('Daiane')

//3 - crie uma função que receba nome, idade, e um estilo musical preferido parâmetro e exiba no console

  let nome ="Daiane"
  let idade = 16
  let gostomusical = "R&B"
  function mostrarmensagem (nome,idade,estilomusical){
  console.log(`Eu sou a ${nome}, tenho ${idade} anos e meu gosto musical preferido é ${ estilomusical}`)
}
  mostrarmensagem(nome,idade,gostomusical)

//4 - crie uma função que receba um filme, uma música parâmetros e exiba no console
  let filme ="Túmulo dos Vagalumes"
  let musica ="i was never there"
  function mostrarfilmeemusica (filme,musica){
  console.log(`Meu filme preferido é o ${filme}, e a minha musica preferida é do the weeknd ${ musica}`)
}
  mostrarfilmeemusica(filme,musica)

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
  function multiplicação(n1,n2){
  return n1*n2
}
  console.log (multiplicação(100,3))

//6 - crie uma função que verifique se uma variável é true ou false
  let temcafé = false
  let isTrue = "beba o café"
  let isFalse = "coloque o café na caneca"

  if ( temcafé == true){
  console.log(isTrue)
  } else {
    console.log(isFalse)
  }
