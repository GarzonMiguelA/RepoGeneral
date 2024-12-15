<script setup>
   import { RouterLink, RouterView } from 'vue-router';
   import HijoDetalleComponente from '@/components/HijoDetalleComponente.vue';
</script>

<template>
    <div>
        <HijoDetalleComponente/>
        <RouterView/>
    </div>
</template>