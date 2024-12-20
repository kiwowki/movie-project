<template>
  <div class="detail_content_wrap container">
    <div class="genres-wrap">
      <div v-for="genres in movieInfo.genres" :key="genres.id">{{ genres.name }}</div>
    </div>
    <div class="detail_wrap">
      <div>{{ movieInfo.adult === true ? '미성년자 관람 불가' : '미성년자 관람 가능' }}</div>
      <div><span>상영 시간:</span>{{ movieInfo.runtime }} 분</div>
      <div><span>인기도:</span>{{ movieInfo.popularity }} 점</div>
      <div><span>투표 수:</span>{{ movieInfo.vote_count }} 회</div>
      <div><span>수익:</span>{{ formattedNumber(movieInfo.revenue) }} 달러</div>
      <div><span>예산:</span>{{ formattedNumber(movieInfo.budget) }} 달러</div>
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
  },
  setup(props) {},
  methods: {
    formattedNumber(number) {
      return number?.toLocaleString()
    }
  }
}
</script>
<style lang="scss">
.detail_content_wrap {
  .genres-wrap {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    div {
      padding: 5px 30px;
      margin: 10px;
      border-radius: 50px;
      background-color: var(--black200);
    }
  }
  .detail_wrap {
    margin: 24px 0 80px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    div {
      margin-top: 10px;
      &:first-child {
        padding: 5px 10px;
      }
      span {
        padding: 5px 10px;
        color: var(--black500);
      }
    }
  }
}
</style>