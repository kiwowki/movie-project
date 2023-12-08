<template>
  <section class="movie_search">
    <h2 class="blind">검색하기</h2>
    <input
      v-model="searchQuery"
      type="search"
      placeholder="검색어를 입력해주세요."
      @keyup.enter="searchMovies"
    />
    <button @click="searchMovies" type="submit">검색</button>
  </section>
</template>

<script>
  export default {
    
  }
</script>
