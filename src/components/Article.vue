<template>
    <article>
        <h3>{{ title }}</h3>
        <p>
            {{ expanded ? text : text.substring(0,100) + '...' }}
        </p>
        <ReadMore :expanded="expanded" @toggle="expanded = !expanded" />
    </article>
</template>

<script setup>
    import { ref } from 'vue';
    import ReadMore from './ReadMore.vue';

    let props = defineProps({
        title: String,
        text: String
    })

    let expanded = ref(false);
</script>

<style scoped>
    article {
        box-shadow: 0px 0px 5px turquoise;
        padding: 0.5em 1.5em;
        margin-bottom: 2em;
    }

    h3 {
        margin-bottom: 0em;
    }
</style>