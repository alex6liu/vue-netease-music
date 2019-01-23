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
        autoplay:true
      },
      lists: [],
    }
  },
  props: {
    
  },
  components: {
    swiper,
    swiperSlide,
    Download,
  },
  mounted: function() {
    fetch(api.reconmendSongs, {
      headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
      })
      .then(res => res.json())
      // .then(res => res.body)
      .then(res => res.albums.map((elem) => {
        this.lists.push(elem.picUrl)
      }))
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
