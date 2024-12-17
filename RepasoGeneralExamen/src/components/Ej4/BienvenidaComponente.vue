<script setup>
import json from '@/assets/json.json';
import { RouterLink } from 'vue-router';
</script>

<template>
    <RouterLink :to="'/'">
        Volver a ejercicios
    </RouterLink>
    <h2>Bienvenido a los tipos</h2>
    <h3>Escoja</h3>
    <nav>
        <ul>
            <li v-for="category in json.categories" :key="category.id">
                <RouterLink :to="'/BienvenidaComponente/categories/' + category.id">
                    {{ category.name }}
                </RouterLink>
            </li>
        </ul>
    </nav>
    <RouterView/>
</template>