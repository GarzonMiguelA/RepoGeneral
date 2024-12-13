<script setup>
  import { ref } from 'vue';
  import { defineProps, defineEmits } from 'vue';

  const props =defineProps({
    tareas: {
      type: Array,
      required: true
    }    
  })

</script>

<template>
  <ul>
    <li v-for="(tarea, index) in tareas" :key="index">
      <TareaItem :tarea="tarea" />
        {{ tarea }}
    </li>
  </ul>

</template>


