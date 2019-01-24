<template>
  <div class="recommend-container">
    <div class="recommend-header">
      <a href="/" class="title">热门推荐</a> 
      <div class="recommend-sub-header">
        <a href="/" class="cate">华语</a>
        <span class="line">|</span>
        <a href="/" class="cate">流行</a>
        <span class="line">|</span>
        <a href="/" class="cate">摇滚</a>
        <span class="line">|</span>
        <a href="/" class="cate">民谣</a>
        <span class="line">|</span>
        <a href="/" class="cate">电子</a>
      </div>
      <span class="more">
        <a href="/">更多</a>
      </span>
    </div>
    <ul class="playlists-container" v-for="list in lists" v-bind:key="list.id">
      <li>
        <div class="u-cover">
          <img v-bind:src="list.picUrl"/>
          <a href=""></a>
          <div class="bottom">
            <span class="nb">{{list.playCount}}</span>
          </div>
        </div>
        <p class="dec">
          <a href="">{{list.name}}</a>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../../utils/api.js';

export default {
  name: 'recommend',
  props: {
    
  },
  data (){
    return {
      lists:[]
    }
  },
  mounted: function() {
    fetch(api.reconmendSongs)
      .then(res => res.json())
      .then(res => res.result)
      .then(res => {
        this.lists=res.slice(0,8);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.recommend-container {

  .recommend-header {
    height: 33px;
    padding: 0 10px 0 34px;
    background-position: -225px -156px;
    border-bottom: 2px solid #C10D0C;

    .title {
      float: left;
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
      text-decoration: none;
    }

    .recommend-sub-header {
      float: left;
      margin: 7px 0 0 20px;

      .cate {
        text-decoration: none;
        font-size: 12px;
        font-family: Arial, Helvetica, sans-serif;
        color: #666;
      }
    }

    .more {
      float: right;
      margin-top: 9px;

      a {
        text-decoration: none;
        font-size: 12px;
        font-family: Arial, Helvetica, sans-serif;
        color: #666;
      }
    }
  }

  .playlists-container {
    margin: 20px 0 0 -42px;

    li {
      width: 140px;
      height: 204px;
      float: left;
      display: inline-block;
      overflow: hidden;
      padding: 0 0 30px 35px;
      line-height: 1.4;

      .u-cover {
        width: 140px;
        height: 140px;
        position: relative;
        display: block;

        img {
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
        }

        a {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 27px;
          background-position: 0 -537px;
          color: #ccc;

          .nb {
            float: left;
            margin: 7px 0 0 0;
          }
        }
      }

      .dec {
        margin: 8px 0 3px;
        font-size: 14px;
        width: 100%;

        a {
          display: inline-block;
          max-width: 100%;
          vertical-align: middle;
          color: #000;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
