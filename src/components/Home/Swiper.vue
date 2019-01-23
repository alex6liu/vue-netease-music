<template>
  <div class="swiper-container">
    <swiper :options="swiperOption" ref="mySwiper" class="swiper">
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide>
    </swiper>
    <download></download>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import Download from './Download.vue';
import { reconmendSongs } from '../../utils/api.js';

export default {
  name: 'Swiper',
  data() {
    return {
      swiperOption: {
        autoplay:true
      }
    }
  },
  props: {
    
  },
  components: {
    swiper,
    swiperSlide,
    Download,
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
