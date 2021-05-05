"use strict";
//LLamo al panel aside y al boton cruz

const panelAside = document.querySelector("#panelAside");
const buttonClose = document.querySelector("#button-close");

//cuando hago click en boton CRUZ se cierra el panel(aside completo)

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

//-------- PANEL TEXTO ------------//

//----Modificacion texto superior/inferior----//
//ARRIBA
const topTitleMeme = document.querySelector("#memeTextTop");
const topText = document.getElementById("topText");

topText.addEventListener("input", () => {
  topTitleMeme.innerText = topText.value;
});

//ABAJO
const bottomTitleMeme = document.querySelector("#memetextBottom");
const bottomText = document.getElementById("bottomText");

bottomText.addEventListener("input", () => {
  bottomTitleMeme.innerText = bottomText.value;
});

//sin texto superior inferior

const checkboxInferior = document.getElementById("checkboxabajo");
checkboxInferior.addEventListener("change", () => {
  if (checkboxInferior.checked) {
    bottomTitleMeme.classList.add("ocultar");
    bottomText.disabled = true;
  } else {
    bottomTitleMeme.classList.remove("ocultar");
    bottomText.disabled = false;
  }
});

const checkboxSuperior = document.getElementById("checkboxarriba");
checkboxSuperior.addEventListener("change", () => {
  if (checkboxSuperior.checked) {
    topTitleMeme.classList.add("ocultar");
    bottomTitleMeme.classList.add("ocultar");
  } else {
    topTitleMeme.classList.remove("ocultar");
    bottomTitleMeme.classList.remove("ocultar");
  }
});

//------SELECT tipo de letra-----
const selectTipoLetra = document.querySelector("#selectTipografias");
selectTipoLetra.addEventListener("change", () => {
  topTitleMeme.style.fontFamily = selectTipoLetra.value;
});

selectTipoLetra.addEventListener("change", () => {
  bottomTitleMeme.style.fontFamily = selectTipoLetra.value;
});

// Tamaño FUENTE
const fontsize = document.querySelector("#fontSize");
fontsize.addEventListener("input", () => {
  topTitleMeme.style.fontSize = `${fontSize.value}px`;
  bottomTitleMeme.style.fontSize = `${fontSize.value}px`;
});

//  ALINEAR TEXTO
const alignLeft = document.querySelector(".left");
const alignCenter = document.querySelector(".center");
const alignRight = document.querySelector(".right");

alignLeft.addEventListener("click", () => {
  topTitleMeme.style = `text-align: left;`;
  bottomTitleMeme.style = `text-align: left;`;
});
alignCenter.addEventListener("click", () => {
  topTitleMeme.style = `text-align: center;`;
  bottomTitleMeme.style = `text-align: center;`;
});
alignRight.addEventListener("click", () => {
  topTitleMeme.style = `text-align: right;`;
  bottomTitleMeme.style = `text-align: right;`;
});

// COLOR DE LETRA
const colorLetra = document.getElementById("inputColor");
colorLetra.addEventListener("input", () => {
  topTitleMeme.style.color = colorLetra.value;
  bottomTitleMeme.style.color = colorLetra.value;
});

// CAMBIAR FONDO
const colorFondoTexto = document.querySelector("#colorFondoTexto");
colorFondoTexto.addEventListener("input", () => {
  topTitleMeme.style.backgroundColor = colorFondoTexto.value;
  bottomTitleMeme.style.backgroundColor = colorFondoTexto.value;
});

// FONDO TRANSPARENTE

const checkboxTransparente = document.getElementById("fondoTransparente");
checkboxTransparente.addEventListener("change", () => {
  if (checkboxTransparente.checked) {
    bottomTitleMeme.classList.add("ocultar");
    topTitleMeme.classList.add("ocultar");
  } else {
    bottomTitleMeme.classList.remove("ocultar");
    topTitleMeme.classList.remove("ocultar");
  }
});

//-------CONTORNOS---------

const contornoOscuro = document.querySelector("#contornoOscuro");
contornoOscuro.addEventListener("click", () => {
  topTitleMeme.style.textShadow =
    "-2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000";
  bottomTitleMeme.style.textShadow =
    "-2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000";
});

const contornoClaro = document.querySelector("#contornoClaro");
contornoClaro.addEventListener("click", () => {
  topTitleMeme.style.textShadow =
    "-2px -2px 1px #fff, 2px 2px 1px #fff, -2px 2px 1px #fff,2px -2px 1px #fff";
  bottomTitleMeme.style.textShadow =
    "-2px -2px 1px #fff, 2px 2px 1px #fff, -2px 2px 1px #fff,2px -2px 1px #fff";
});

const sinContorno = document.querySelector("#sinContorno");
sinContorno.addEventListener("click", () => {
  topTitleMeme.style.textShadow = "";
  bottomTitleMeme.style.textShadow = "";
});

//----- ESPACIADO ------
const espaciado = document.querySelector("#espaciado");
espaciado.addEventListener("input", () => {
  topTitleMeme.style.padding = `${espaciado.value}px`;
  bottomTitleMeme.style.padding = `${espaciado.value}px`;
});

//----INTERLINEADO----
const interlineado = document.querySelector("#interlineado");
interlineado.addEventListener("input", () => {
  topTitleMeme.style.lineHeight = interlineado.value;
});

//---------FIN PANEL TEXTO-------//

//--------PANEL IMAGEN-----------//
const imagenmeme = document.querySelector("#meme-image");
const inputurl = document.querySelector("#input-url");
inputurl.addEventListener("change", () => {
  imagenmeme.style.backgroundImage = `url("${inputurl.value}")`;
});

//---- FONDO IMAGEN -----//
const inputColorFondoImagen = document.querySelector("#colorFondoImagen");
const spanColorFondo = document.querySelector("#spanColorFondo");
inputColorFondoImagen.addEventListener("input", () => {
  imagenmeme.style.backgroundColor = inputColorFondoImagen.value;
  spanColorFondo.textContent = inputColorFondoImagen.value;
});

//---- Tipos de fondo  ---//
const tipoDeFondo = document.querySelector("#TipoDeFondo");
tipoDeFondo.addEventListener("input", () => {
  imagenmeme.style.backgroundBlendMode = tipoDeFondo.value;
});

/*
//FILTROS DE IMAGEN
const brillo = document.getElementById("brillo");
const opacidad = document.getElementById("opacidad");
const contraste = document.getElementById("contraste");
const desenfoque = document.getElementById("desenfoque");
const grises = document.getElementById("grises");
const sepia = document.getElementById("sepia");
const hue = document.getElementById("hue");
const saturado = document.getElementById("saturado");
const negativo = document.getElementById("negativo");

const addFiltros = () =>{
    imgMeme.style.filter = `brightness(${brillo.value}) 
    opacity(${opacidad.value}) contrast(${contraste.value}%) 
    blur(${desenfoque.value}px) grayscale(${grises.value}%) 
    sepia(${sepia.value}%) hue-rotate(${hue.value}deg) 
    saturate(${saturado.value}%) invert(${negativo.value})`;
};

brillo.addEventListener("change", addFiltros);
opacidad.addEventListener("change", addFiltros);
contraste.addEventListener("change", addFiltros);
desenfoque.addEventListener("change", addFiltros);
grises.addEventListener("change", addFiltros);
sepia.addEventListener("change", addFiltros);
hue.addEventListener("change", addFiltros);
saturado.addEventListener("change", addFiltros);
negativo.addEventListener("change", addFiltros);

//REESTABLECER FILTROS
const botonReestablecer = document.getElementById("btn-reestablecer");
const resetFiltros = () =>{
    brillo.value = 1; opacidad.value = 1; contraste.value = 100;
    desenfoque.value = 0; grises.value = 0; sepia.value = 0;
    hue.value = 0; saturado.value = 100; negativo.value = 0;
};

botonReestablecer.addEventListener("click", () =>{
    imgMeme.style.filter = "none";
    resetFiltros();
});
<div class="filtros-img column">
            <h3>FILTROS</h3>
            <div class="column">
              <label for="brillo">BRILLO</label>
              <input type="range" name="brillo" id="brillo" min="0" max="1" value="1" step="0.1" />
            </div>
            <div class="column">
              <label for="opacidad">OPACIDAD</label>
              <input type="range" name="opacidad" id="opacidad" min="0" max="1" value="1" step="0.1" />
            </div>
            <div class="column">
              <label for="contraste">CONTRASTE</label>
              <input type="range" name="contraste" id="contraste" min="100" max="1000" value="100" />
            </div>
            <div class="column">
              <label for="desenfoque">DESENFOQUE</label>
              <input type="range" name="desenfoque" id="desenfoque" min="0" max="10" value="0" step="0.1" />
            </div>
            <div class="column">
              <label for="escala">ESCALA DE GRISES</label>
              <input type="range" name="escala" id="grises" min="0" max="100" value="0" />
            </div>
            <div class="column">
              <label for="sepia">SEPIA</label>
              <input type="range" name="sepia" id="sepia" min="0" max="100" value="0" />
            </div>
            <div class="column">
              <label for="hue">HUE</label>
              <input type="range" name="hue" id="hue" min="0" max="360" value="0" />
            </div>
            <div class="column">
              <label for="saturado">SATURADO</label>
              <input type="range" name="saturado" id="saturado" min="100" max="1000" value="100" step="10" />
            </div>
            <div class="column">
              <label for="negativo">NEGATIVO</label>
              <input type="range" name="negativo" id="negativo" min="0" max="1" value="0" step="0.1" />
            </div>
          </div>
         
          <button id="btn-reestablecer">Reestablecer filtros</button>
         
        </section>*/
