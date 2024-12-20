<template>
  <section class="movie_search">
    <h2 class="blind">검색하기</h2>
    <input
      v-model="searchKeyword"
      type="text"
      placeholder="영화 제목을 입력해주세요."
      @keyup.enter="() => searchMovies()"
    />
    <button @click="() => searchMovies()" type="submit">검색</button>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(_, { emit }) {
    const searchKeyword = ref('')

    const searchMovies = () => {
      emit('search', searchKeyword.value)
      searchKeyword.value = ''
    }

    return {
      searchKeyword,
      searchMovies
    }
  }
}
</script>

<style lang="scss">
.movie_search {
  width: 100%;
  margin: 50px 0px 20px;
  border: 1px solid var(--black500);
  background-color: var(--black100);
  padding: 1rem 2rem;
  display: flex;
  border-radius: 50px;

  input {
    width: 100%;
    background-color: transparent;
    color: var(--white);
  }

  button {
    white-space: nowrap;
    background-color: transparent;
    color: var(--yellow);
    font-size: 1rem;
  }
}
@media (max-width: 1340px) {
  .movie_search {
    width: calc(100% - 40px);
    margin: 50px 20px 20px;
  }
}
</style>
