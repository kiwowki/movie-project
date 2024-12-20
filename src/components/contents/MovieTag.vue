<template>
  <div class="movie_tag">
    <ul>
      <li>
        <router-link
          :to="{ name: 'latest' }"
          @click="categorySelect('latest')"
          class="to-right-underline"
          :class="{ active: route.path === '/latest' }"
          >최신영화</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'popular' }"
          @click="categorySelect('popular')"
          class="to-right-underline"
          :class="{ active: route.path === '/popular' }"
          >인기영화</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'upcoming' }"
          @click="categorySelect('upcoming')"
          class="to-right-underline"
          :class="{ active: route.path === '/upcoming' }"
          >개봉예정</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'toprated' }"
          @click="categorySelect('toprated')"
          class="to-right-underline"
          :class="{ active: route.path === '/toprated' }"
          >평점순</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  setup(_, { emit }) {
    const route = useRoute()

    const categorySelect = (selectedCategory) => {
      emit('selectedCategory', selectedCategory)
    }

    return {
      categorySelect,
      route
    }
  }
}
</script>
<style lang="scss">
.movie_tag {
  ul {
    display: flex;

    li {
      
      a {
        padding: 0.5rem 0.5rem;
        display: inline-block;
        margin: 20px 15px;
      }
    }
  }
}
</style>