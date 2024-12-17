<script setup>
import { inject } from 'vue';
import Ej3MensajeBComponente from '../Ej3/Ej3MensajeBComponente.vue';

const mensajeInjectado = inject('mensaje');


</script>


<template>
    <h3>El componente Hijo (primer hijo) lo muestra:</h3>
    <p>El mensaje inyectado es: {{ mensajeInjectado }}</p>

    <Ej3MensajeBComponente/>
  </template>