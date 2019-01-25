<template>
  <div class="swiper-container">
    <swiper :options="swiperOption" ref="mySwiper" class="swiper">
      <swiper-slide v-for="list in lists" v-bind:key="list.id"><img v-bind:src="list" class="slider-image" /></swiper-slide>
    </swiper>
    <download></download>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import Download from './Download.vue';
import api from '../../utils/api.js';

export default {
  name: 'Swiper',
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
      },
      lists: [
        require('../../assets/images/home-slider/1.jpg'),
        require('../../assets/images/home-slider/2.jpg'),
        require('../../assets/images/home-slider/3.jpg'),
        require('../../assets/images/home-slider/4.jpg'),
        require('../../assets/images/home-slider/5.jpg'),
        require('../../assets/images/home-slider/6.jpg'),
        require('../../assets/images/home-slider/7.jpg'),
        require('../../assets/images/home-slider/8.jpg'),
      ],
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
.slider-image {
  width: 730px;
  height: 336px;
}
</style>
