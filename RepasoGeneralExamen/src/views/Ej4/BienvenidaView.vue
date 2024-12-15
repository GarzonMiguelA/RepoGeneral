<script setup>
   import { RouterLink, RouterView } from 'vue-router';
   import BienvenidaComponente from '@/components/BienvenidaComponente.vue';
</script>

<template>
    <div>
        <BienvenidaComponente/>
        <RouterView/>
    </div>
</template>