<template>
    <form @submit.prevent="addMovie">
        <label for="title">Titel:</label>
        <br>
        <input type="text" name="title" id="title" v-model="movie.title">
        
        <br>
        
        <label for="release_year">Utgivningsår:</label>
        <br>
        <input type="number" name="release_year" id="release_year" v-model="movie.release_year">

        <br>
        
        <label for="duration">Duration:</label>
        <br>
        <input type="number" name="duration" step="0.01" id="duration" v-model="movie.duration">

        <br>
        
        <label for="watched">Har sett:</label>
        <br>
        <select name="watched" id="watched" v-model="movie.watched">
            <option value="">Välj en</option>
            <option value="1">Ja</option>
            <option value="0">Nej</option>
        </select>
        
        
        <br>

        <input type="submit" value="Lägg till">
        <span class="error" v-if="error">{{ error }}</span>
    </form>
</template>

<script setup>
    import { ref, watch } from 'vue';

    let movie = ref({
        title: '',
        release_year: '',
        duration: '',
        watched: ''
    });

    let error = ref('');

    let emits = defineEmits(['refreshMovies']);

    let addMovie = async() => {

        if(!movie.value.title || !movie.value.release_year || !movie.value.duration || movie.value.watched === '') {
            error.value = 'Alla fält skall vara uppfyllda';
            return;
        }

        error.value = '';

        try {
            let url = 'https://tois-dt193g-moment22.onrender.com/movies';
            
            movie.value.watched = Number(movie.value.watched);
            movie.value.release_year = Number(movie.value.release_year);

            let res = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(movie.value)
            });

            if(res.ok) {
                emits('refreshMovies');

                movie.value = {
                    title: '',
                    release_year: '',
                    duration: '',
                    watched: ''
                };
            }
            
        } catch (error) {
            console.log('Det är ett fel: ' + error);
        }

    }

    
</script>

<style scoped>
    .error {
        color: red;
        max-width: 800px;
        margin: 0.5em;
        font-weight: bold;
        font-size: 1.2em;
    }
    form {
        max-width: 800px;
        margin: 0 auto;
    }

    label {
        font-weight: bold;
        font-size: 1.4em;
    }

    input[type='text'], input[type='number'], select {
        max-width: 400px;
        padding: 0.5em;
        width: 100%;
    }

    input[type='submit'] {
        max-width: 100px;
        padding: 0.6em;
        width: 100%;
        margin-left: 1em;
        background-color: #42b883;
        color: white;
        text-transform: uppercase;
        border: none;
        border-radius: 5px;
        transition: 0.3s;
        cursor: pointer;
    }

    input[type='submit']:hover {
        background-color: #35495e;
    }

    @media screen and (max-width: 800px) {
        form {
            width: 90%;
        }

        input[type='text'] {
            max-width: 400px;
            padding: 0.5em;
            width: 90%;
        }
    }

    @media screen and (max-width: 587px) {
        input[type='submit'] {
            margin-left: 0em;
            margin-top: 1em;
        }
    }
</style>