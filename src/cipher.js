const cipher = {
  encode: function(offset, texto) {
    let palabraEncriptada = ""; //Aqui almacenamos la palabra cifrada
    if((Number.isInteger(offset) && offset > 0) || typeof texto === "string") {

      for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];

        if (caracter.match(/[A-Z]/i)) {
          caracter = String.fromCharCode((texto.charCodeAt(i) - 65 + offset) % 26 + 65);
        } 
        palabraEncriptada += caracter;
      }
      return palabraEncriptada
    }
    else {throw new TypeError("Error");

    }
  },

  decode: function (offset, texto) {
    let palabraDesencriptada = ""; //Aqui almacenamos la palabra decifrada
    if (((Number.isInteger(offset) && offset > 0)|| typeof texto === "string")) {
      for (let i = 0; i< texto.length; i++) {
        let caracter = texto[i];

        if (caracter.match(/[A-Z]/i)) {
          caracter = String.fromCharCode((texto.charCodeAt(i) -65 - offset % 26 + 26 + 26) % 26 + 65);
        }
        palabraDesencriptada += caracter;
      }
      return palabraDesencriptada
    }
    else throw new TypeError("Error");
  },
}; 

export default cipher;




