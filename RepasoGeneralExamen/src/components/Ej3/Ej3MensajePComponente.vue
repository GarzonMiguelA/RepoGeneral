<script setup>
import { provide, ref } from 'vue';
import Ej3MensajeAComponente from './Ej3MensajeAComponente.vue';

//En este Componente contendre el mensaje reactivo:

const mensaje = ref('');
provide('mensaje', mensaje);

</script>


<template>
    <h2>Este es el hijo que (aunque no lo veamos hace el provide de mensaje, dandole paso a primer hijo)</h2>
    <form>
        <input type="text" v-model="mensaje">
        <button>Enviar mensaje</button>
    </form>
    <Ej3MensajeAComponente/>
</template>