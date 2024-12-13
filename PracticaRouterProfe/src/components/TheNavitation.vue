<script setup>
import dades from '@/data.json';
</script>
<template>
 <nav id="nav">
    <!--RouterLink to="/">Home</RouterLink>
    <RouterLink to="/brazil">Brazil</RouterLink>
    <RouterLink to="/panama">Panama</RouterLink>
    <RouterLink to="/hawaii">Hawaii</RouterLink>
    <RouterLink to="/jamaica">Jamaica</RouterLink-->

        <RouterLink id="logo" to="/">Vue travel app</RouterLink>
        <RouterLink
        v-for="destination in dades.destinations"
        :key="destination.id"
        :to="{name: 'destination.show', params:{id: destination.id,slug:destination.slug}}"
        >
            {{ destination.name }}
        </RouterLink>
    </nav>   
</template>

