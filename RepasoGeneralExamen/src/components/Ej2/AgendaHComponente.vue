<script setup>

import { defineProps } from 'vue';

const props = defineProps({
    nombres: {
        type: Array,
        required: true
    }
})

const emit = defineEmits(['eliminar-nombre'])

const eliminarNombre = (nombre) => {
    emit('eliminar-nombre', nombre)

}
</script>

<template>
    <ul>
    <li v-for="(nombre,index) in nombres" :key="index">
        {{ nombre }}
        <button @click="eliminarNombre(nombre)">
            Eliminar
        </button>
    </li>
   </ul>
</template>