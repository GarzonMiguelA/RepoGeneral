<script setup>
import { ref } from 'vue';
import AgendaHComponente from './AgendaHComponente.vue';

const nombres = ref([])
const nuevoNombre = ref('')

//Funcion para añadir nuevo nombre:
const agregarNombre = () => {
    if (nuevoNombre.value.trim() !== '') {
        nombres.value.push(nuevoNombre.value);
        nuevoNombre.value = '';
    }
}

const eliminarNombre = (nombre) => {
    nombres.value = nombres.value.filter(nombres => nombres !== nombre)
}
</script>

<template>
    <!--Lista de nombres con boton-->

    <h2>Agenda de nombres</h2>
    <input v-model="nuevoNombre" placeholder="Añadir nombre" />
    <button @click="agregarNombre">Añadir nombre</button>
    <AgendaHComponente :nombres="nombres" @eliminar-nombre="eliminarNombre"></AgendaHComponente>

</template>