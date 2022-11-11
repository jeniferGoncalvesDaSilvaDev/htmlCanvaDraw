console.log('Hello World!');
//acessando o html do canvas
let canvas = document.getElementById("canvas")
//definindo o contexto 2d
let ctx = canvas.getContext('2d')
//preenchendo o desenho 
ctx.fillStyle = "blue"
//aplicando o preenchimento com posicao x e y e largura e altura
ctx.fillRect(0,5,400,70)
