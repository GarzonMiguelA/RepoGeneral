<script setup>
  import TareaItem from './components/TareaItem.vue';
  import { ref, computed } from 'vue';

  
  //Creamos la variable para guardar tarea
  const tareas = ref([]);
  const nuevaTarea = ref('');


  const guardadoDeTareas = () => {
    if(nuevaTarea.value.trim() !== ''){
      tareas.value.push(nuevaTarea.value)
      nuevaTarea.value = ''
    }
  }; 
</script>

<template>
   <h1>Bienvenido a la lista de tareas interactivas!</h1>
   <form @submit.prevent="guardadoDeTareas">
      <label>Escribe las tareas</label>
      <input type="text" v-model="nuevaTarea">
      <button type="submit">Añadir</button>
   </form>
   <h2>Lista de tareas añadidas</h2>
   <TareaItem :tareas="tareas"/>
</template>


