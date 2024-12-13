<script setup>
import { computed } from 'vue';
import sourceData from '@/data.json';

// Definimos las props
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  experienceSlug: {
    type: String,
    required: true,
  },
});

// Computed para obtener la destination
const destination = computed(() =>
  sourceData.destinations.find(destination => destination.id === props.id)
);

// Computed para obtener la experience a partir de la destination
const experience = computed(() =>
  destination.value?.experiences.find(experience => experience.slug === props.experienceSlug)
);
</script>

<template>
  <div>
    <h1>{{ experience?.name }}</h1>
    <img :src="`/images/${experience?.image}`" :alt="experience?.name" />
    <p>{{ experience?.description }}</p>
  </div>
</template>
