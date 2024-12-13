<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute(); // Accede a los parámetros de la ruta
const destination = ref(null); // Almacena los datos de la destinación
const error = ref(null); // Almacena posibles errores durante la llamada
const loading = ref(false); // Indica si la solicitud está en proceso

// Función para cargar los datos de la API
async function fetchDestination(slug) {
  loading.value = true; // Inicia el estado de carga
  try {
    const response = await fetch(`https://travel-dummy-api.netlify.app/${slug}`);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    destination.value = data; // Guarda los datos en el estado reactivo
    error.value = null; // Limpia errores previos
  } catch (err) {
    error.value = err.message; // Maneja errores
    destination.value = null; // Limpia datos anteriores
  } finally {
    loading.value = false; // Finaliza el estado de carga
  }
}

// Ejecuta la función al montar el componente
onMounted(() => {
  fetchDestination(route.params.slug);
});

// Observa cambios en el parámetro `slug` y vuelve a cargar los datos
/*watch(() => route.params.slug, (newSlug) => {
  fetchDestination(newSlug);
});*/
</script>

<template>
  <section v-if="loading" class="loading">
    <p>Cargando datos...</p>
  </section>
  <section v-else-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="destination.image" :alt="destination.name">
      <p>{{ destination.description }}</p>
    </div>
  </section>
  <p v-else-if="error" class="error">{{ error }}</p>
</template>

<style>
.loading {
  font-size: 1.2rem;
  color: gray;
}
.error {
  color: red;
  font-weight: bold;
}
</style>
