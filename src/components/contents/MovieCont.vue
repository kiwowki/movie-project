<template>
  <section class="movie_cont">
    <h2 class="blind">영화</h2>
    <div class="movie play_icon" v-for="movie in movies" :key="movie.id">
      <router-link :to="'/detail/' + movie.id">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
      </router-link>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    movies: {
      type: Array
    }
  }
}
</script>
<style lang="scss">
.movie_cont {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(247px, 1fr)); /* 반응형 그리드 */
  gap: 1rem;

  .movie {
    border-radius: 8px;
    overflow: hidden;
    background-color: var(--black100);
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
}
@media (max-width: 1340px) {
  .movie_cont {
    padding: 0 20px;
  }
}

@media (max-width: 800px) {
  .movie_cont {
    gap: 2rem;
  }
}
</style>