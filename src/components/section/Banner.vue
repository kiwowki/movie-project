<template>
  <div
    class="DetailView_intro"
    :style="{
      backgroundImage: 'url(http://image.tmdb.org/t/p/w1280' + movieInfo.backdrop_path + ')'
    }"
  >
    <div class="container">
      <div class="left play_icon">
        <router-link :to="'/detail/' + movieInfo.id" class="left_img_wrap">
          <img :src="'http://image.tmdb.org/t/p/w500' + movieInfo.poster_path" alt="" />
        </router-link>
      </div>
      <div class="right">
        <h2>
          <router-link :to="'/detail/' + movieInfo.id">{{ movieInfo.title }}</router-link>
        </h2>
        <p class="desc">{{ movieInfo.overview }}</p>
        <div class="right_info">
          <p class="release_date"><span>개봉 :</span> {{ movieInfo.release_date }}</p>
          <p class="vote_average"><span>평점 :</span> {{ movieInfo.vote_average }}</p>
        </div>
        <div class="credits">
          <div class="credit" v-for="credit in movieCredits.slice(0, 5)" :key="credit.id">
            <img :src="'http://image.tmdb.org/t/p/w500' + credit.profile_path" alt="" />
            <div class="credit_name">{{ credit.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
export default {
  props: {
    movieInfo: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const movieCredits = ref([])
    const route = useRoute()

    const movieCreditsFetch = (propsMovieId) => {
      const movieId = route.params.movieId || propsMovieId
      const apiKey = import.meta.env.VITE_API_KEY
      const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=ko-KR`

      fetch(url)
        .then((response) => response.json())
        .then((res) => {
          console.log(res)
          movieCredits.value = res.cast
        })
        .catch((err) => {
          console.log(err)
        })
    }

    onMounted(() => {
      const propsMovieId = props.movieInfo.id
      movieCreditsFetch(propsMovieId)
    })
    return {
      movieCredits,
    }
  }
}
</script>
<style lang="scss">
.DetailView_intro {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

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
        margin: 40px;
        img {
          min-width: 100px;

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
        font-size: 1.8rem;

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
        .credit {
          padding: 0 0.7vw;
          img {
            border-radius: 10px;
          }
          &:first-child {
            padding-left: 0;
          }
          .credit_name {
            margin-top: 10px;
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    .container {
      flex-direction: column;
      align-items: center;
      .left {
        width: 100%;
      }
      .right {
        width: 100%;
      }
    }
    }
}
</style>
