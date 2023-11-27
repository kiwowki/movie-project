<template>
  <div class="movie_tag">
    <ul>
      <li><a href="#" @click="fetchMovies('latest')">최신영화</a></li>
      <li><a href="#" @click="fetchMovies('popular')">인기영화</a></li>
      <li><a href="#" @click="fetchMovies('upcoming')">개봉예정</a></li>
      <li><a href="#" @click="fetchMovies('toprated')">평점순</a></li>
    </ul>
  </div>
</template>
