<template>
  <div class="home">
    <web-header></web-header>
    <swiper></swiper>
    <recommend></recommend>
    <new></new>
    <board></board>
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
