import cipher from './cipher.js';
console.log(cipher);


// Llamar Elementos DOM//
const textArea = document.getElementById('texto'); //texto
//const btnEnviar = document.getElementById('btn-captura');
const menuDesplegable = document.getElementById('numeros');
const btnEnviarNumero = document.getElementById('btnEnviarNumero');
const btnCodificar = document.getElementById('btnCodificar')
const btnDecodificar = document.getElementById('btnDecodificar')
const textAreaResultado = document.getElementById('resultado');


function desplazamiento() {
  const offset = parseInt(menuDesplegable.value);
  
  if(!isNaN(offset)) {
    cipher.offset = offset;
  }
}
btnEnviarNumero.addEventListener('click', desplazamiento);


function codificar() {
  const offset = parseInt(menuDesplegable.value);
  const texto = textArea.value;
  const codificarTexto = cipher.encode(offset, texto);
  //textArea.value = codificarTexto;
  textAreaResultado.value = codificarTexto;
}

btnCodificar.addEventListener('click', codificar);

//BOTON DECODIFICAR

function decodificar(){
  const offset = parseInt(menuDesplegable.value);
  const texto = textArea.value;
  const decodificarTexto =  cipher.decode(offset,texto);
  textAreaResultado.value = decodificarTexto;
}
btnDecodificar.addEventListener('click', decodificar);


//IMPORTAR 

