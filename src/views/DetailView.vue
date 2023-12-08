<script setup>
import DetailView from '@/components/detail/DetailView.vue'
</script>

<template>
  <header id="header" role="banner">
    <div class="header_inner">
      <nav class="header_nav">
        <h1><a href="#">Movie Star</a></h1>
        <div class="header_menu">
          <p><a href="#">하늑 영화 Top10</a></p>
          <p><a href="#">코딩 영화 Top10</a></p>
        </div>
      </nav>
    </div>
  </header>

  <main id="main">
    <DetailView :movieInfo="movieInfo" />
  </main>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  components: {
    DetailView
  },

  setup() {
    const movieInfo = ref([])
    const route = useRoute()

    const movieInfoFetch = () => {
      const movieId = route.params.movieId
      const apiKey = import.meta.env.VITE_API_KEY
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`

      fetch(url)
        .then((response) => response.json())
        .then((res) => {
          console.log(res)
          movieInfo.value = res
        })
        .catch((err) => {
          console.log(err)
        })
    }

    onMounted(() => {
      const movieId = route.params.movieId

      if (movieId) {
        movieInfoFetch(movieId)
      }
    })
  }
}
</script>

<style lang="scss">
.DetailView_intro {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  .container {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 10;
    .left {
      max-width: 350px;
      width: 40%;

      z-index: 10;
      display: flex;
      align-items: center;

      .left_img_wrap {
        padding: 40px;
        img {
          min-width: 100px;
          
          &::before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background-color: rgba(107, 107, 107, 0.151);
            backdrop-filter: blur(20px);
            z-index: 1;
          }

          &:hover {
            filter: brightness(0.7);
          }
        }
      }
    }
    .right {
      padding: 40px;
      width: calc(100% - 390px);
      min-width: 60%;
      z-index: 10;
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h2 {
        font-weight: bold;
        font-size: 30px;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        transition: all 0.3s;
        &:hover {
          color: var(--black400);
        }
      }

      .desc {
        margin: 20px 0;
        color: var(--black500);

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 11;
        -webkit-box-orient: vertical;
      }
      .right_info {
        color: var(--white);
        span {
          color: var(--black500);
        }
      }
      .credits {
        margin-top: 20px;
        display: flex;
        div {
          padding: 0 0.7vw;
          img {
            border-radius: 10px;
          }
          &:first-child {
            padding-left: 0;
          }
        }
      }
    }
  }
}
</style>
