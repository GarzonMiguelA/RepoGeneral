<script setup>
  // Importamos funciones necesarias de Vue en m icaso ref y provide:
  import { ref, provide } from 'vue';
  // Importamos componente Pedidos que lo usare para mostrar los productos:
  import Pedidos from './components/Pedidos.vue';
  

  // Definimos moneda inicial que se usará:
  const currency = ref('$');

  // Creamos el array de productos con name y price
  const productos = ref([
    { name: "Hamburger 🍔", price: 5 },
    { name: "Cheeseburger 🧀", price: 6 },
    { name: "Impossible Burger 🥕", price: 7 },
    { name: "Fries 🍟", price: 2 }
  ]);

  // Estado para el nombre del pedido introducido por el usuario
  const nombrePedido = ref("");
  // Estado para almacenar los productos que el usuario ha añadido al carrito
  const productosComprados = ref([]);


  // Proporcionamos los productos y la moneda a los componentes hijos
  provide('productos', productos);
  provide('currency', currency);


  // Creamos la función para manejar cuando se añade un producto al carrito
  function manejarProductoAñadido(nombreProducto) {
      // Añadimos nombre del producto al array:  
      productosComprados.value.push(nombreProducto); // Añadir el nombre del producto al array
      // Construimos mensaje de alerta:
      const alertMessage = `${productosComprados.value.join(', ')}`;
      // Mostramos mensaje:
      alert(alertMessage);  
  }

  function manejarPedidoRealizado() {
      // Mostramos mensaje indicando que el pedido ha sido realizado:
      alert('Tu pedido ha sido realizado');
  }
</script>

<template>
  <h1>{{ nombrePedido }}</h1>
  <input v-model="nombrePedido" type="text" placeholder="Escribe tu nombre de pedido">
  <button @click="manejarPedidoRealizado">Realizar pedido</button>
  
  <label>
    Currency
    <select v-model="currency">
      <option value="€">Euros(€)</option>
      <option value="$">Dollars($)</option>
    </select>
  </label>

  <div class="pedidos-container">
    <Pedidos @product-added="manejarProductoAñadido" />
  </div>
</template>


<style scoped>
h1 {
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 5rem;
}

input[type="text"] {
  display: block;
  width: 100%;
  max-width: 500px;
  margin: 1.5rem auto;
  padding: 0.8rem;
  border: 2px solid #ccc;
  border-radius: 10px;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

input[type="text"]:focus {
  border-color: #000000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  outline: none;
}

button {
  display: block;
  margin: 1rem auto;
  padding: 0.8rem 1.5rem;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #b4b4b4;
  transform: scale(1.10);
}

label {
  display: block;
  text-align: center;
  margin: 1rem 0;
  font-size: 1.1rem;
  color: #555;
}

select {
  margin-left: 0.5rem;
  padding: 0.5rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.pedidos-container {
  display: grid;
  justify-content: center; 
  align-items: center;     
  margin-top: 2rem;
  padding: 1rem;
  width: 100%;
  gap: 30px; 
}
</style>