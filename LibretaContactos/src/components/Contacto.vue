<script setup>
//Aqui en contacto.vue haremos la busqueda de un contacto
import { ref } from 'vue';

  //Definimos props:
  const {contactos, filtro} = defineProps({
    contactos: Array,
    filtro: String
  })
</script>

<template>
  <ul>
    <li v-for="contacto in contactos">
      <template v-if="contacto.nombre.toLowerCase().includes(filtro.toLowerCase())">
        {{ contacto.nombre }} - {{ contacto.numero }}
      </template>
    </li>
  </ul>
</template>


