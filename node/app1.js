/*Problema 1: Uso de Callbacks y Promesas
Descripción:
Escriba una función en Node.js que realice las siguientes tareas usando callbacks y
promesas:
Leer un archivo de texto (usando callbacks): La función debe leer un archivo de texto
(por ejemplo, datos.txt) y pasar su contenido a un callback.
Convertir el contenido a mayúsculas (usando promesas): La función debe tomar el
contenido del archivo y convertirlo a mayúsculas, retornando este resultado a través
de una promesa.*/

const fs = require('fs');
const archivoTxt = 'data.txt';

function leerArchivoTxt(rutaArchivo, callback) {
  fs.readFile(rutaArchivo, 'utf8', (error, data) => {
    callback(data);
    console.log("texto simple leido "+data);
  });
}

function convertirMayuscula(rutaArchivo) {
  return new Promise((resolve, reject) => {
    leerArchivoTxt(rutaArchivo, data => {
      const resultado = data.toUpperCase();
      resolve(resultado);
    });
  });
}
convertirMayuscula(archivoTxt)
  .then(resultado => console.log('texto en mayusculas:', resultado))
  .catch(error => console.error('Error al convertir:', error));
