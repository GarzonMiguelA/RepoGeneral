<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useRoute } from 'vue-router';
import json from '@/assets/json.json';

const route = useRoute();
const categoryId = parseInt(route.params.id);
const category = json.categories.find(c => c.id === categoryId);
</script>

<template>
    <button>
      <RouterLink to="/BienvenidaComponente">Volver a categorias</RouterLink>
    </button>
    <h1>{{ category.name }}</h1>
    <p>{{ category.description }}</p>

    <RouterLink :to="`/BienvenidaComponente/categories/${route.params.id}/child/${category.child.slug}`">
      <h3>Hijo: {{ category.child.name }}</h3>
    </RouterLink>
    
    <RouterView></RouterView>
</template>