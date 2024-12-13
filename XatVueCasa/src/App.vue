<script setup>
  import { ref } from 'vue';
  import Mensaje from './components/Mensaje.vue';

  const mensajes= ref([]);

  const nuevoMensaje = ref('');

  const enviarMensaje = () => {
    mensajes.value.push(nuevoMensaje.value);
    nuevoMensaje.value = '';
  }

</script>

<template>
  <h1>Chat entre usuarios en vue</h1>
  
  <ul>
    <Mensaje :mensajes="mensajes" />
  </ul>
  
  <input v-model="nuevoMensaje" type="text" placeholder="escribe un mensaje">
  <button @click="enviarMensaje">Enviar</button>
  
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
