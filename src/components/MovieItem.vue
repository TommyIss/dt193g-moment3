<template>
    <tr>
        <td>{{ title }}</td>
        <td>{{ release_year }}</td>
        <td>{{ duration }} h</td>
        <td>{{ watched === 1 ? 'Ja': 'Nej' }}</td>
        <td><button @click="$emit('deleteMovie', id)">Ta bort</button></td>
    </tr>
</template>

<script setup>
    defineProps({
        id: Number,
        title: String,
        release_year: Number,
        duration: String,
        watched: Number
    })

    let emit = defineEmits(['deleteMovie']);
    
</script>

<style scoped>

</style>