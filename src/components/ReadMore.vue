<template>
    <button @click="$emit('toggle')">{{ expanded ? 'Läs mindre' : 'Läs mer' }}</button>
</template>

<script setup>
    let props = defineProps({
        expanded: Boolean
    })

    let emits = defineEmits(['toggle']);
</script>

<style>
    button {
        background-color: turquoise;
        color: black;
        padding: 8px 14px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.9sem;
    }
    button:hover {
        background-color: beige;
    }
</style>