<template>
  <HeaderSection />
  <main id="detailView">
    <Banner v-if="movieInfo" :movieInfo="movieInfo" />
    <DetailContent  v-if="movieInfo" :movieInfo="movieInfo"  />
  </main>
  <FooterSection />
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import HeaderSection from '@/components/section/HeaderSection.vue';
import FooterSection from '@/components/section/FooterSection.vue';
import Banner from '@/components/section/Banner.vue';
import DetailContent from '@/components/detail/DetailContent.vue';

export default {
  components: {
    HeaderSection,
    FooterSection,
    Banner,
    DetailContent,
  },

  setup() {
    const movieInfo = ref({})
    const route = useRoute()

    const movieInfoFetch = (movieId) => {
      // const movieId = route.params.movieId
      const apiKey = import.meta.env.VITE_API_KEY
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=ko-KR`

      fetch(url)
        .then((response) => response.json())
        .then((res) => {
          console.log(res)
          movieInfo.value = res
          console.log("movieInfo.value2", movieInfo.value)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    onMounted(() => {
      console.log("movieId.value", route.params.movieId)
      const movieId = route.params.movieId
      if (movieId) {
        movieInfoFetch(movieId)
      }
    })

    return {
      movieInfo,
    }
  }
}
</script>

<style lang="scss">

</style>
