<script setup>


</script>
<template>
  <div class="DetailView_intro" :style="{ backgroundImage: 'url(' + movieInfo.poster_path + ')' }">
    <div class="container">
      <div class="left play_icon">
        <a href="#" class="left_img_wrap">
          <img :src="'http://image.tmdb.org/t/p/w500/' + movieInfo.poster_path" alt="" />
        </a>
      </div>
      <div class="right">
        <h2>
          <a href="#">{{ movieInfo.title }}</a>
        </h2>
        <p class="desc">{{ movieInfo.description }}</p>
        <div class="right_info">
          <p class="release_date"><span>개봉 :</span> {{ movieInfo.releaseDate }}</p>
          <p class="vote_average"><span>평점 :</span> {{ movieInfo.voteAverage }}</p>
        </div>
        <div class="credits">
          <div v-for="credit in movieInfo.credits" :key="credit.id">
            <img :src="credit.imageUrl" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movieInfo: {
      type: Object,
      required: true
    }
  }
}
</script>
