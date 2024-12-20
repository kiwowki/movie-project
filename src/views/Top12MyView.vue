<template>
  <HeaderSection />
  <section class="my_cont container">
    <h2 class="blind">인생 영화 추천</h2>
    <div class="my play_icon" v-for="(movie, index) in movies" :key="index">
      <span
        class="rank"
        :style="{ color: index === 0 ? 'var(--yellow)' : index <= 3 ? 'var(--white)' : 'var(--black300)' }"
        >{{ index + 1 }}</span
      >
      <router-link :to="'/detail/' + movie.id">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
      </router-link>
    </div>
  </section>
  <FooterSection />
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import HeaderSection from '@/components/section/HeaderSection.vue'
import FooterSection from '@/components/section/FooterSection.vue'

export default {
  components: {
    HeaderSection,
    FooterSection
  },
  setup(props) {
    const movies = [
      { id: '87827', poster_path: '/mexaTje46m4uJ9YToFUydtZuqaL.jpg', title: '라이프 오브 파이' },
      { id: '13363', poster_path: '/nCjwNsqXmRcUhsN8NdAFB0ybA2U.jpg', title: '맨 프럼 어스' },
      { id: '13', poster_path: '/xdJxoq0dtkchOkUz5UVKuxn7a2V.jpg', title: '포레스트 검프' },
      { id: '38', poster_path: '/jULvvUymAqM18gIDHbMRfKHbCSB.jpg', title: '이터널 선샤인' },
      { id: '518963', poster_path: '/dOVLy8K0hBFsxW2whcuTDPWrdlZ.jpg', title: '독전' },
      { id: '530254', poster_path: '/979reU4oeyHuqQn8D8zHrmUUq6P.jpg', title: '마녀' },
      { id: '120467', poster_path: '/kDByLWU30umAUyetDnmdptUMVap.jpg', title: '그랜드 부다페스트 호텔' },
      {
        id: '116745',
        poster_path: '/88J7DQ0Yn6MIqXaAiTgjyErzPnh.jpg',
        title: '월터의 상상은 현실이 된다'
      },
      {
        id: '76341',
        poster_path: '/cadVm6gKYYukmPysHGCwrawUHHa.jpg',
        title: '매드맥스: 분노의 도로'
      },
      {
        id: '6479',
        poster_path: '/yvaDfiS0DzsHDWBjlqxo6CPgDVJ.jpg',
        title: '나는 전설이다'
      },
      { id: '20453', poster_path: '/9zQdFVyDoXqFmGYXp4obna6FEMh.jpg', title: '세 얼간이' },
      {
        id: '1339570',
        poster_path: '/i3HGVP8kjBWl6R6G0Vm6uFH2SHX.jpg',
        title: '레드불 T1 다큐멘터리 : 함께 날아오르다'
      }
    ]

    return {
      movies
    }
  }
}
</script>
  
  
  <style lang="scss">
.my_cont {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .my {
    width: 24%;
    margin-bottom: 1.5%;

    .rank {
      font-size: 1.5rem;
      font-family: var(--mainfont-nexon);
    }
  }
}
</style>
  