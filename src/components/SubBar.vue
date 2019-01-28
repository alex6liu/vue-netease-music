<template>
  <div class="subbar-container">
    <a href="/discover" class="pages active">推荐</a>
    <a href="/discover/toplist" class="pages">排行榜</a>
    <a href="/discover/playlist" class="pages">歌单</a>
    <a href="/discover/djradio" class="pages">主播电台</a>
    <a href="/discover/artist" class="pages">歌手</a>
    <a href="/discover/album" class="pages">新碟上架</a>
  </div>
</template>

<script>
export default {
  name: 'subbar',
  props: {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.subbar-container {
  background-color: #c20c0c;
  align-items: center;
  height: 35px;
  justify-content: center;

  .pages {
    text-decoration: none;
    margin: 10px;
    color: white;
    line-height: 35px;
  }

  .active {
    padding: 5px 10px 5px 10px;
    border-radius: 30px;
    background-color: rgba(31,31,31,0.38)
  }
}
</style>
