<script setup>
import dades from "@/data.json";
</script>
<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <!--RouterLink
        v-for="destination in dades.destinations"
        :key="destination.id"
        :to="destination.slug"
    -->
              <RouterLink
        v-for="destination in dades.destinations"
        :key="destination.id"
        :to="{name: 'destination.show', params:{id: destination.id,slug:destination.slug}}"
    >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </RouterLink>
    </div>
  </div>
</template>
