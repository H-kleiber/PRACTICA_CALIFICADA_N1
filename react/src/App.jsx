import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/clientes');
        const data = await response.json();
        setClientes(data);
        console.log(data);
      } catch (error) {
        console.error('Error al obtener clientes:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Clientes:</h1>
        <ul>
          {clientes.map(cliente => (
            <li key={cliente.id}>{cliente.nombre}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
