<template>
  <div class="header-container">
    <div class="header">
      <div class="company-logo">
        <img src="../assets/icon/company.png" class="netease"/>
        <span>网易云音乐</span>
      </div>
      <router-link to="/discover" class="pages">发现音乐</router-link>
      <router-link to="/my" class="pages">我的音乐</router-link>
      <router-link to="/" class="pages">朋友</router-link>
      <router-link to="/" class="pages">商城</router-link>
    </div>
    <sub-bar></sub-bar>
  </div>
</template>

<script>
import SubBar from './SubBar.vue';

export default {
  name: 'WebHeader',
  components: {
    SubBar,
  },
  props: {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header-container {
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  flex-direction: 'row';
  align-items: center;
  justify-content: center;
  background-color: #242424;
  
  .company-logo {
    display: flex;
    flex-direction: row;
    color: white;
    align-items: center;
  }

  .netease {
    width: 50px;
    height: 50px;
    color: white;
  }

  .pages {
    margin: 20px;
    color: white;
    text-decoration: none;
  }
}
</style>
