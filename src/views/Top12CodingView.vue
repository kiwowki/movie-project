<template>
  <HeaderSection />
  <section class="coding_cont container">
    <h2 class="blind">코딩 영화 추천</h2>
    <div class="coding play_icon" v-for="(movie, index) in movies" :key="index">
      <span
        class="rank"
        :style="{
          color: index === 0 ? 'var(--yellow)' : index <= 3 ? 'var(--white)' : 'var(--black300)'
        }"
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
      { id: '37799', poster_path: '/4WAq2IZuVvWl0Wd1YIgBXdYgXna.jpg', title: '소셜 네트워크' },
      { id: '152601', poster_path: '/eTOqjSNjMUpnjbRCnYElU4b5uWW.jpg', title: '그녀' },
      { id: '180', poster_path: '/oaVX63mgvSN4MRN98sg5molfKBd.jpg', title: '마이너리티 리포트' },
      { id: '264660', poster_path: '/a3tuxUHT64cl4gPqWbtsLyKdzJS.jpg', title: '엑스 마키나' },
      { id: '462', poster_path: '/oDR2LT5HTGIafEftj4bjpGcpIa9.jpg', title: '에린 브로코비치' },
      { id: '860', poster_path: '/zZ1rN4LoPxKNfAp67Xl300WxVeD.jpg', title: '위험한 게임' },
      { id: '20526', poster_path: '/pNdgBobMlnsN7J6x1UDb0T5Szcu.jpg', title: '트론: 새로운 시작' },
      { id: '473', poster_path: '/mXb34XbED1OEqSODAXGjoYHV1Hx.jpg', title: '파이' },
      { id: '201088', poster_path: '/7zu6HPnKPjNA7NuR4DGRdaH0PdX.jpg', title: '블랙코드' },
      { id: '10428', poster_path: '/qfx2EENW1sOpKNVKLzr7VOhlxkt.jpg', title: '해커즈' },
      { id: '366363', poster_path: '/imzycsyg93D0tXLs1BEcy2BsIDz.jpg', title: 'CodeGirl' },
      { id: '9798', poster_path: '/tqwgrLvw0ZpuJ7msYb9ZsRAiI0S.jpg', title: '에너미 오브 스테이트' }
    ]

    return {
      movies
    }
  }
}
</script>
  
  
  <style lang="scss">
.coding_cont {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .coding {
    width: 24%;
    margin-bottom: 1.5%;

    .rank {
      font-size: 1.5rem;
      font-family: var(--mainfont-nexon);
    }
  }
}
</style>
  