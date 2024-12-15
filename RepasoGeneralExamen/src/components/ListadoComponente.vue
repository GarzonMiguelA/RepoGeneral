<script setup>
import { RouterLink } from 'vue-router';
</script>


<template>
    <h1>Ejercicios:</h1>
    <nav>
        <RouterLink to="/">
            <p>Home</p>
        </RouterLink>
        <RouterLink to="/ListaTareas">
            <p>Ej1: Lista tareas</p>
        </RouterLink>
        <RouterLink to="/AgendaPComponente">
            <p>Ej2: Agenda de nombres</p>
        </RouterLink>
        <RouterLink to="/Ej3MensajePComponente">
            <p>Ej3: Mensaje injectado</p>
        </RouterLink>
        <RouterLink to="/BienvenidaComponente">
            <p>Ej4: Productos Router</p>
        </RouterLink>
    </nav>
    
</template>