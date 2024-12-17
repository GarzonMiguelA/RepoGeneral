<script setup>
import { inject, ref } from 'vue';

const mensaje = inject('mensaje');
const nuevoMensaje = ref('');


const actualizarMensaje = () => {
    if (mensaje && typeof mensaje.value === 'string') {
        mensaje.value = nuevoMensaje.value;
    }
};

</script>

<template>
    <!--Y aqui damos paso para cambiar el mensaje:-->
    <h5>Aqui puede cambiar su mensaje</h5>
    <input type="text" v-model="nuevoMensaje" placeholder="Cambiar mensaje">
    <button @click="actualizarMensaje">Actualizar</button>
</template>
