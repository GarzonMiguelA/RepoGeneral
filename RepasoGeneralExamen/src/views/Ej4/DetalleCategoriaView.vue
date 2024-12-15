<script setup>
   import { RouterLink, RouterView } from 'vue-router';
   import DetalleCategoriaComponente from '@/components/DetalleCategoriaComponente.vue';
</script>

<template>
    <div>
        <DetalleCategoriaComponente/>
        <RouterView/>
    </div>
</template>