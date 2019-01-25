<template>
  <div class="home">
    <web-header></web-header>
    <swiper></swiper>
    <div class="discover">
      <recommend></recommend>
      <new></new>
      <board></board>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WebHeader from '@/components/WebHeader.vue';
import Swiper from '@/components/Home/Swiper.vue';
import Recommend from '@/components/Home/Recommend.vue';
import New from '@/components/Home/New.vue';
import Board from '@/components/Home/Board.vue';

export default {
  name: 'home',
  components: {
    WebHeader,
    Swiper,
    Recommend,
    New,
    Board,
  },
};
</script>

<style scoped lang="scss">
.discover {
  width: 730px;
  min-height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  display: flex;
  flex-direction: column;
}
</style>
