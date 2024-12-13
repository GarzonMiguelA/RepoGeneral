<script setup>
  import { defineProps, defineEmits } from 'vue';
  defineProps({
    mensajes:Array
  })
</script>

<template>

  <li v-for="(mensaje, index) in mensajes" :key="index">
      Usuario1: {{ mensaje }}
  </li>
</template>