<template>
  <div class="new-container">
    <div class="header">
      <a href="/" class="title">新碟上架</a>
      <span class="more">
        <a href="/">更多</a>
      </span>
    </div>
    <div class="container">
      <swiper :options="swiperOption" ref="mySwiper" class="swiper">
        <swiper-slide v-for="list in lists" v-bind:key="list.id">
          <div class="inner-container">
            <img v-bind:src="list.picUrl" />
            <a href="/"></a>
            <p class="name">
              <a href="/">{{list.name}}</a>
            </p>
            <p class="singer">
              <a>{{list.artist.name}}</a>
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import api from '../../utils/api.js';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'new',
  props: {
    
  },
  data() {
    return {
      lists: [],
      swiperOption: {
        autoplay: false,
        loop : true,
        slidesPerView : 5,
        slidesPerGroup : 5,
      },
    };
  },
  mounted: function () {
    fetch(api.new)
      .then(res => res.json())
      .then(res => res.albums)
      .then((res) => {
        this.lists = res;
      })
      
  },
  components: {
    swiper,
    swiperSlide,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.new-container {
  a {
    text-decoration: none;
  }

  .header {
    height: 33px;
    padding: 0 10px 0 34px;
    background-position: -225px -156px;
    border-bottom: 2px solid #C10D0C;

    .title {
      float: left;
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
    }

    .more {
      float: right;
      margin-top: 9px;

      a {
        font-size: 12px;
      }
    }
  }

  .container {
    position: relative;
    zoom: 1;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;

    .inner-container {
      width: 118px;
      height: 150px;
      margin-left: 11px;

      img {
        display: block;
        width: 100px;
        height: 100px;
      }

      .name, 
      .singer {
        width: 90%;
        line-height: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
      }
    }
  }
}
</style>
