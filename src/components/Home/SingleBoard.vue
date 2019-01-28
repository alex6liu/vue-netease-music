<template>
  <div class="container">
    <div class="header">
      <div class="cover">
        <img :src="cover"/>
        <a href="/discover/toplist?id=19723756" class="msk" title="云音乐飙升榜"></a>
      </div>
      <div class="title">
        <a href="/discover/toplist?id=19723756" title="云音乐飙升榜">
          <h3 class="f-fs1 f-thide">云音乐飙升榜</h3>
        </a>
      </div>
    </div>
    <div class="content">
      <ol>
        <li v-for="(list, index) in lists" :key="list.id">
          <span v-if="index <= 2" class="no no-top">{{index + 1}}</span>
          <span v-else class="no">{{index + 1}}</span>
          <a class="nm" :href="getHref(list.id)">{{list.name}}</a>
        </li>
      </ol>
    </div>
    <div class="more">
      <a href="/discover/toplist?id=2884035" class="s-fc0">查看全部&gt;</a>
    </div>
  </div>
</template>

<script>
import api from '../../utils/api.js';

export default {
  name: 'singleboard',
  props: ['id'],
  data() {
    return {
      idx: this.id,
      lists: [],
      cover: '',
    }
  },
  mounted: function() {
    fetch(api.singleBoard + this.idx)
      .then(res => res.json())
      .then(res => res.playlist.tracks.slice(0, 10))
      .then(res => {
        this.lists = res
      })
    
    if(this.idx == '3') {
      this.cover = 'http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100';
    }
    if(this.idx == '0') {
      this.cover = 'http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100';
    }
    if(this.idx == '2') {
      this.cover = 'http://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100';
    }
  },
  methods: {
    getHref: function(id) {
      return "/song?id=" + id
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    color: #333;
  }

  .header {
    height: 100px;
    padding: 20px 0 0 19px;

    .cover {
      float: left;
      display: inline;
      width: 80px;
      height: 80px;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .title {
      float: left;
      width: 116px;
      margin: 6px 0 0 10px;

      h3 {
        width: 100%;
        font-size: 14px;
      }
    }
  }

  .content {
    font-size: 12px;

    ol {
      height: 319px;
      margin-left: 30px;
      line-height: 32px;

      li {
        list-style: none;
        height: 32px;

        .no {
          float: left;
          position: relative;
          width: 35px;
          height: 32px;
          margin-left: -35px;
          text-align: center;
          color: #666;
          font-size: 16px;
        }

        .no-top {
          color: #c10d0c;
        }

        .nm {
          float: left;
          width: 170px;
          height: 32px;
          color: #bbb;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }
      }
    }
  }

  .more {
    clear: both;
    height: 32px;
    margin-right: 32px;
    text-align: right;
    line-height: 32px;
    font-size: 12px;
    width: 100%;
  }
}
</style>
