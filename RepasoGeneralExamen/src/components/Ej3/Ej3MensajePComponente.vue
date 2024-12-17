<script setup>
import { provide, ref } from 'vue';
import Ej3MensajeAComponente from './Ej3MensajeAComponente.vue';

//En este componente contendre el mensaje reactivo:
const mensaje = ref('');
provide('mensaje', mensaje);

//Creamos la funcion de añadir mensaje para el button
const añadirMensaje = () => {
    mensaje.value = inputMensaje.value;
};
const inputMensaje = ref('');
</script>


<template>
    <RouterLink :to="'/'">
        Volver a ejercicios
    </RouterLink>
    <h2>Este es el hijo que (aunque no lo veamos hace el provide de mensaje, dandole paso a primer hijo)</h2>
    <form @submit.prevent="añadirMensaje">
        <input type="text" v-model="inputMensaje">
        <button>Añadir mensaje</button>
    </form>
    <Ej3MensajeAComponente/>
</template>