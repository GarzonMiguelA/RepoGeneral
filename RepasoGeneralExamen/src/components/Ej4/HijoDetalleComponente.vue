<script setup>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import json from '@/assets/json.json';

const route = useRoute();
const childSlug = route.params.childSlug;
const child = json.categories.map(category => category.child).find(child => child.slug === childSlug);
</script>

<template>
   <button>
      <RouterLink :to="`/BienvenidaComponente/categories/${route.params.id}`">Volver a detalles de categorias</RouterLink>
   </button>
   <h1>{{ child.name }}</h1>
   <p>{{ child.description }}</p>
    
</template>