<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import sourceData from '@/data.json';
import ExperienceCard from '@/components/ExperienceCard.vue';
import GoBack from '@/components/GoBack.vue';

const route = useRoute();
// Calcula l'ID de la destinació a partir dels paràmetres de la ruta
//const destinationId = computed(() => parseInt(route.params.id));
//canvi a props per això ens desfem de la computed
const props = defineProps(['id']);

// Troba la destinació en funció de l'ID
const destination = computed(() =>
  //sourceData.destinations.find(destination => destination.id === destinationId.value)
  sourceData.destinations.find(destination => destination.id === props.id)
  //sourceData.destinations.find(destination => destination.id === route.params.id)
);
</script>

<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <GoBack/>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{ destination.description }}</p>
    </div>
  </section>
  <section class="experiences">
    <h2>Top experiences in {{ destination.name }}</h2>
    <div class="cards">
      <router-link 
        v-for="experience in destination.experiences" 
        :key="experience.slug"
        :to="{name:'experience.show',params:{experienceSlug:experience.slug}}"
        >
        <ExperienceCard  :experience="experience" />
      </router-link>

    </div>
    <router-view/>
  </section>
</template>
