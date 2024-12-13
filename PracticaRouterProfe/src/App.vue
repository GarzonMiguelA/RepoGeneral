<script setup>
import { RouterView } from 'vue-router';
import TheNavitation from '@/components/TheNavitation.vue';

</script>
<template>
  <TheNavitation/>
  <div class="container">
    <RouterView :key="$route.path"/>
  </div>
 
</template>

