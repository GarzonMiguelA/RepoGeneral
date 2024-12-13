<script setup>
    //Importamos inject para poder hacer uso de ello:
    import { inject } from 'vue';
    //Importamos el componente que quiero usar:
    const currency = inject('currency');
</script>

<template>
    <!-- Mostramos el tipo de moneda: -->
    <span>{{ currency }}</span>
</template>