<template>
    <div>編號:{{ id }}</div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()
console.log(route.params.id)
const id = ref(route.params.id)
</script>
