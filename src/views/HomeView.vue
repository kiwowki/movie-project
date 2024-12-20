<template>
  <HeaderSection />
  <banner v-if="movies.length > 0" :movieInfo="movies[0]" />
  <main id="main" role="main">
    <div class="container">
      <div class="movie_inner">
        <movie-search @search="handleSearch" />
        <!-- //movie_search -->

        <Movie-tag @selectedCategory="handleCategory" />
        <!-- //movie_tag -->

        <Movie-cont :movies="movies" />
        <!-- //movie_cont -->
        <button class="more_button" @click="handleMore">더보기</button>
      </div>
    </div>
  </main>
  <FooterSection />
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'

import HeaderSection from '@/components/section/HeaderSection.vue'
import Banner from '@/components/section/Banner.vue'
import FooterSection from '@/components/section/FooterSection.vue'
import MovieSearch from '@/components/contents/MovieSearch.vue'
import MovieCont from '@/components/contents/MovieCont.vue'
import MovieTag from '@/components/contents/MovieTag.vue'

const route = useRoute()
const router = useRouter()
const movies = ref([])
const selectedCategory = ref('latest')
const page = ref(1)
const searchPage = ref(1)
const searching = ref(false)
const searchKeyword = ref('')
const queryKeyword = ref(route.query.key)

const fetchMovies = async (category) => {
  selectedCategory.value = category
  let url = ''

  switch (selectedCategory.value) {
    case 'latest':
      url = 'https://api.themoviedb.org/3/movie/now_playing'
      break
    case 'popular':
      url = 'https://api.themoviedb.org/3/movie/popular'
      break
    case 'upcoming':
      url = 'https://api.themoviedb.org/3/movie/upcoming'
      break
    case 'toprated':
      url = 'https://api.themoviedb.org/3/movie/top_rated'
      break
  }

  try {
    const response = await axios.get(url, {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        language: 'ko-KR',
        page: String(page.value)
      }
    })
    movies.value = [...movies.value, ...response.data.results]
    console.log(response.data.results)
  } catch (err) {
    console.log(err)
  }
}

const fetchSearch = async (keyword) => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        language: 'ko-KR',
        query: keyword,
        page: String(searchPage.value)
      }
    })
    console.log('searchMovies1', response.data.results)
    movies.value = [...movies.value, ...response.data.results]
    console.log('searchMovies2', movies.value)
  } catch (err) {
    console.error(err)
  }
}

const handleSearch = (keyword) => {
  console.log('searchKeyword.value1', searchKeyword.value)

  if (keyword) {
    searchKeyword.value = keyword
    console.log('searchKeyword.value2', searchKeyword.value)
    movies.value = []
    searchPage.value = 1
    searching.value = true

    router.push({
      path: '/search',
      query: { key: searchKeyword.value }
    })

    fetchSearch(searchKeyword.value)
  }
}

const handleCategory = (category) => {
  movies.value = []
  page.value = 1
  searchPage.value = 1
  searching.value = false
  fetchMovies(category)
}

const handleMore = () => {
  if (searching.value) {
    console.log('searching.value1', searching.value)
    searchPage.value += 1
    fetchSearch(searchKeyword.value)
  } else {
    console.log('searching.value2', searching.value)
    page.value += 1
    fetchMovies(selectedCategory.value)
  }
}

onMounted(() => {
  if (queryKeyword.value) {
    searchKeyword.value = queryKeyword.value
    searching.value = true
    fetchSearch(searchKeyword.value)
  } else {
    searching.value = false
    fetchMovies('latest')
  }
})

watch(
  route,
  (newRoute, oldRoute) => {
    console.log('route:', route)
    console.log('route.query:', route.query)
    console.log('route.path:', route.path)

    if (route.path === '/search') {
      console.log(`Category changed ${route.query.key}`)
      handleSearch(route.query.key)
    } else {
      movies.value = []
      page.value = 1
      searchPage.value = 1
      searching.value = false
      switch (route.path) {
        case '/latest':
          fetchMovies('latest')
          break
        case '/popular':
          fetchMovies('popular')
          break
        case '/upcoming':
          fetchMovies('upcoming')
          break
        case '/toprated':
          fetchMovies('toprated')
          break
        case '/':
          fetchMovies('latest')
          break
        default:
          console.warn('Unhandled path:', route.path)
          break
      }
    }
  },
  { deep: true, immediate: true }
)
</script>


<style lang="scss">
.movie_inner {
  display: flex;
  align-items: center;
  flex-direction: column;

  .more_button {
    width: auto;
    padding: 5px 20px;
    background-color: var(--black);
    color: var(--white);
    // border-radius: 12px;
  }
}
</style>
