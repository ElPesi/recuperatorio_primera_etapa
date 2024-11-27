import React, { useState } from 'react';

const Ejercicio1 = () => {
  
  const [producto, setProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const [metodoPago, setMetodoPago] = useState('');

  const manejarProductoChange = (event) => setProducto(event.target.value);
  const manejarPrecioChange = (event) => setPrecio(event.target.value);
  const manejarMetodoPagoChange = (event) => setMetodoPago(event.target.value);

  const manejarEnvio = (event) => {
    event.preventDefault(); 
    console.log(`Producto: ${producto}
    Precio: ${precio}
    Método de Pago: ${metodoPago}`);
  };

  return (
    <div>
      <h2>Formulario de Compra</h2>
      <form onSubmit={manejarEnvio}>
        <div>
          <label product="producto">Nombre del producto:</label>
          <input
            type="text"
            id="producto"
            value={producto}
            onChange={manejarProductoChange}
          />
        </div>
        <div>
          <label price="precio">Precio del producto:</label>
          <input
            type="number"
            id="precio"
            value={precio}
            onChange={manejarPrecioChange}
          />
        </div>
        <div>
          <label form="metodoPago">Selecciona un método de pago:</label>
          <select
            id="metodoPago"
            value={metodoPago}
            onChange={manejarMetodoPagoChange}
            
          >
            <option value="">Selecciona...</option>
            <option value="contado">Contado / Efectivo</option>
            <option value="transferencia">Transferencia Bancaria</option>
            <option value="debito">Tarjeta de Débito</option>
            <option value="credito">Tarjeta de Crédito</option>
          </select>
        </div>
        <button type="submit">Realizar Compra</button>
      </form>
    </div>
  );
};

export default Ejercicio1;