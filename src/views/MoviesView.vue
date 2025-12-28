<template>
    <h2>Filmer</h2>

    <AddFilm @refresh-movies="getMovies" />

    <table>
        <thead>
            <tr>
                <th>Titel</th>
                <th>Utgivningsår</th>
                <th>Duration</th>
                <th>Har sett</th>
                <th>Radera</th>
            </tr>
        </thead>
        <tbody>
            <MovieItem v-for="movie in movies" 
            :key="movie.id" 
            :title="movie.title" :release_year="movie.release_year" :duration="movie.duration" :watched="movie.watched"
            @deleteMovie="deleteMovie"
            :id="movie.id"
            />
        </tbody>
    </table>
</template>

<script setup>
    import MovieItem from '@/components/MovieItem.vue';
    import AddFilm from '@/components/AddFilm.vue';
    import { onMounted, ref } from 'vue';
    
    let movies = ref([]);

    onMounted(() => {
        getMovies();
    })

    let getMovies = async() => {
        try {
            let url = 'https://tois-dt193g-moment22.onrender.com/movies';

            let res = await fetch(url);

            if(res.ok) {
                let data = await res.json();

                movies.value = data.movies;
        
            }
        } catch (error) {
            console.log('Det är ett fel: ' + error);
        }
    }

    let deleteMovie = async(id) => {
        try {
            let url = 'https://tois-dt193g-moment22.onrender.com/movies/';

            let res = await fetch(url + id, {
                method: 'DELETE'
            });

            if(res.ok) {
                getMovies();
            }
        } catch (error) {
            console.log('Det är ett fel: ' + error);
        }
    }
</script>

<style scoped>

</style>