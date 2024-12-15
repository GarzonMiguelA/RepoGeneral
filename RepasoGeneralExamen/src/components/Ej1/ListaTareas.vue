<script setup>
import { ref } from 'vue';

// Guardaremos las tareas en un array reactivo
const tareas = ref([]);
// Lógica para añadir nueva tarea
const nuevaTarea = ref(''); // Lo del input

// Lógica para añadir nueva tarea
const añadirTarea = () => {
    if (nuevaTarea.value.trim() !== '') {
        tareas.value.push(nuevaTarea.value);
        nuevaTarea.value = '';
    }
};
</script>

<template>
    <div>
        <h2>Lista de tareas</h2>
        <form @submit.prevent="añadirTarea">
            <label>Escribe las tareas</label>
            <input type="text" v-model="nuevaTarea">
            <button type="submit">Añadir</button>
        </form>
    </div>
    <ul>
        <li v-for="(tarea, index) in tareas" :key="index">
            {{ tarea }}
        </li>
    </ul>
</template>