// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

let botonAñadir = document.getElementById('añadir')
let listaAmigos = document.getElementById('listaAmigos')
let inputAmigo = document.getElementById('amigo')
let resultado = document.getElementById('resultado')


function agregarAmigo() {
    let nombreAmigo = inputAmigo.value.trim(); // quito espacios extra
    if (nombreAmigo === "") {
        alert('Escribi un nombre')
        return
    }; // no agrego vacíos

    amigos.push(nombreAmigo);
    console.log(amigos);
    // Limpiar la lista antes de volver a dibujarla
    listaAmigos.innerHTML = "";

    // Recorrer el arreglo y crear <li> por cada amigo
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }

    inputAmigo.value = "";
    inputAmigo.focus();
}

console.log(amigos)

function sortearAmigo(){

let numeroAleatorio = Math.floor(Math.random() * amigos.length);
    console.log(numeroAleatorio)
    if (amigos.length == 0) {
        alert('No tienes amigos :( ¡Agregalos!')
    } else {
        alert(`${amigos[numeroAleatorio]}`)
        amigos.splice[numeroAleatorio]
        listaAmigos.innerHTML = ''
        resultado.innerHTML = `El amigo secreto es ${amigos[numeroAleatorio]}`
        amigos=[]
    }
}