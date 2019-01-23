<template>
  <div class="subbar-container">
    <router-link to="/discover" class="pages active">推荐</router-link>
    <router-link to="/my" class="pages">排行榜</router-link>
    <router-link to="/" class="pages">歌单</router-link>
    <router-link to="/" class="pages">主播电台</router-link>
    <router-link to="/" class="pages">歌手</router-link>
    <router-link to="/" class="pages">新碟上架</router-link>
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
