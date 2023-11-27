<script setup>
// import { ref, onMounted } from 'vue'
// import axios from 'axios'

// const movies = ref([])
// const searchQuery = ref('')

// const fetchMovies = async (category) => {
//   let url = 'https://api.themoviedb.org/3/movie/popular'

//   switch (category) {
//     case 'latest':
//       url = 'https://api.themoviedb.org/3/movie/now_playing'
//       break
//     case 'popular':
//       url = 'https://api.themoviedb.org/3/movie/popular'
//       break
//     case 'upcoming':
//       url = 'https://api.themoviedb.org/3/movie/upcoming'
//       break
//     case 'toprated':
//       url = 'https://api.themoviedb.org/3/movie/top_rated'
//       break
//     case 'search':
//       // 검색어를 사용하여 API 호출
//       url = 'https://api.themoviedb.org/3/search/movie'
//       break
//   }

//   try {
//     const apiKey = 'b6ad23dc5b13b44e24f504b7a4338764'

//     const response = await axios.get(url, {
//       params: {
//         api_key: apiKey,
//         language: 'ko-KR',
//         page: 1,
//         query: searchQuery.value
//       }
//     })

//     movies.value = response.data.results
//     console.log(movies)
//   } catch (error) {
//     console.error('Error fetching movies:', error)
//   }
// }

// onMounted(async () => {
//   // 초기 페이지를 최신 영화로
//   await fetchMovies('latest')
// })

// const searchMovies = () => {
//   // 검색 버튼을 클릭할 때 검색어를 사용하여 API 호출
//   fetchMovies('search')
// }
</script>

<template>
  <HeaderSection />

  <main id="main" role="main">
    <div class="container">
      <div class="movie_inner">
        <MovieSearch @onSearch="search" />
        <!-- //movie_search -->

        <MovieTag @onSearch="tags"/>
        <!-- //movie_tag -->

        <MovieCont />
        <!-- //movie_cont -->
      </div>
    </div>
  </main>

  <FooterSection />
</template>

<script>
import HeaderSection from '@/components/section/HeaderSection.vue'

import MovieSearch from '@/components/contents/MovieSearch.vue'
import MovieTag from '@/components/contents/MovieTag.vue'
import MovieCont from '@/components/contents/MovieCont.vue'

import FooterSection from '@/components/section/FooterSection.vue'

export default {
  name: 'MovieHomePage',
  components: {
    HeaderSection,
    MovieSearch,
    MovieTag,
    MovieCont,
    FooterSection
  },
  data() {
    return {
      movies: []
    }
  },
  methods: {
    async search(query) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b6ad23dc5b13b44e24f504b7a4338764&language:ko-KR&query=${query}`);
        const result = await response.json();
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    },
    async tags(query) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b6ad23dc5b13b44e24f504b7a4338764&language:ko-KR&query=${query}`);
        const result = await response.json();
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss">
.movie_search {
  padding: 20px 0;
  position: relative;
  input {
    border: 1px solid var(--black400);
    padding: 0.8rem 1rem;
    width: 100%;
    border-radius: 50px;
  }
  button {
    position: absolute;
    right: 8px;
    top: 26px;
    width: 4.5rem;
    height: 2.1rem;
    border-radius: 50px;
    background-color: var(--yellow);
    color: var(--black);
  }
}
.movie_tag {
  ul {
    display: flex;
    li {
      a {
        border: 1px solid var(--black400);
        padding: 0.4rem 1.3rem;
        display: inline-block;
        border-radius: 50px;
        margin: 20px 10px 20px 0;
        box-sizing: border-box;

        &:hover {
          background-color: var(--white);
          color: var(--black);
        }
      }
    }
  }
}
.movie_cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .movie {
    width: 24%;
    margin-bottom: 1.5%;
    background-color: var(--black200);
  }
}
</style>
