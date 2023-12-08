/*Problema 2: Uso de Fetch y Async/Await
Descripción:
Escriba una función asincrónica en Node.js que utilice fetch para obtener datos de una
API y procesarlos con async/await.
 */
let url='http://localhost:3000/api/clientes';
async function fetchData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error al obtener clientes:', error);
    }
  };
   fetchData(url);