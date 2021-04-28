"use strict";
//LLamo al panel aside y al boton cruz

const panelAside = document.querySelector("#panelAside");
const buttonClose = document.querySelector("#button-close");

//cuando hago click en boton CRUZ se cierra el panel(aside completo)
//agregar la clase ocultar

buttonClose.addEventListener("click", () => {
  panelAside.classList.add("ocultar");
});

const panelImg = document.querySelector("#panel-image");
const panelText = document.querySelector("#panel-text");

const buttonImg = document.querySelector("#button-img");
const buttonText = document.querySelector("#button-text");

// --------VER PANEL IMAGEN--------
buttonImg.addEventListener("click", () => {
  panelAside.classList.remove("ocultar");
  panelText.classList.add("ocultar");
  panelImg.classList.remove("ocultar");
});

// --------VER PANEL TEXTO--------
buttonText.addEventListener("click", () => {
  panelAside.classList.remove("ocultar");
  panelText.classList.remove("ocultar");
  panelImg.classList.add("ocultar");
});

//--------MODO CLARO/OSCURO--------------//
const body = document.querySelector("body");
const claroOscuro = document.querySelector("#claroOscuro");

claroOscuro.addEventListener("click", () => {
  body.classList.toggle("modoClaro");
  body.classList.toggle("oscuro");

  if (claroOscuro.innerText == "Modo Claro") {
    claroOscuro.innerText = "Modo Oscuro";
  } else {
    claroOscuro.innerText = "Modo Claro";
  }
});

//----Modificacion texto superior/inferior----//
const topTitleMeme = document.querySelector(".memeTextTop");
const topText = document.getElementById("topText");

topText.addEventListener("input", () => {
  topTitleMeme.textContent = topText.value;
});

const bottomTitleMeme = document.querySelector(".memeTextBottom");
const bottomText = document.getElementById("bottomText");

bottomText.addEventListener("input", () => {
  bottomTitleMeme.textContent = bottomText.value;
});
//OCULTAR TOP TEXT
/*const textoSuperior = document.getElementById("textoSuperior");
const ocultarTextoSuperior = document.querySelector(".header-generator");

textoSuperior.addEventListener("click", () =>{
    ocultarTextoSuperior.classList.toggle("ocultar-panel");
});*/
