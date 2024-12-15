<script setup>
import { inject } from 'vue';
import Ej3MensajeBComponente from '../Ej3/Ej3MensajeBComponente.vue';

const mensaje = inject('mensaje');

</script>


<template>
    <h3>El componente Hijo (primer hijo) lo muestra:</h3>
    <p>El mensaje inyectado es: {{ mensaje }}</p>

    <Ej3MensajeBComponente/>
  </template>