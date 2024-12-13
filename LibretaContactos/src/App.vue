<script setup>
  import { ref } from 'vue';

  import Contaco from './components/Contacto.vue';
  
  const nombre = ref('');
  const numero = ref('');
  const contactos = ref([]);
  const filtro = ref('');


  const agregarContactos = () => {
    contactos.value.push({
      nombre: nombre.value,
      numero: numero.value
    });
    nombre.value = ''; // Limpiar el campo de nombre
    numero.value = ''; // Limpiar el campo de número
}
</script>

<template>
  <h1>Libreta de contactos</h1>
  <input v-model="nombre" type="text" placeholder="nombre del contacto">
  <input v-model= "numero" type="text" placeholder="numero de telefono">
  <input v-model="filtro" type="text" placeholder="Buscar por nombre">
  <Contaco :contactos="contactos" :filtro="filtro"/>

  <button @click="agregarContactos">Añadir contacto</button>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
