function  aleatorio(min, max){
    return Math.floor(Math.random() * max - min +1)
}
//1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
let min = 1
let max = 3
let pc = aleatorio(1,3)
jugador = prompt("Elije: 1 para piedra, 2 para papel, 3 para tijera")
//alert("Elejiste " + jugador)
if(jugador == 1){
    alert("Elejiste 🥌")
} else if(jugador == 2){
    alert("Elejiste 🧻")
} else if(jugador == 3){
    alert("Elejiste ✂")
} else{
    alert("Elejiste PERDER")
}

if(pc == 1){
    alert("pc elije 🥌")
} else if(pc == 2){
    alert("pc elije 🧻")
} else if(pc == 3){
    alert("pc elije ✂")
}
// COMBATE
if(pc == jugador){
    alert("EMPATE")
} else if(jugador == 1 && pc == 3){
    alert("GANASTE")
} else if(jugador == 2 && pc == 1){
    alert("GANASTE")
} else if(jugador == 3 && pc == 2){
    alert("GANASTE")
} else {
    alert("PERDISTE")
}