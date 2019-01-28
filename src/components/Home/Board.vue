<template>
  <div class="board-container">
    <div class="header">
      <a href="/" class="title">榜单</a>
      <span class="more">
        <a href="/">更多</a>
      </span>
    </div>
    <div class="content">
      <single-board id="3"></single-board>
      <single-board id="0"></single-board>
      <single-board id="2"></single-board>
    </div>
  </div>
</template>

<script>
import SingleBoard from './SingleBoard.vue';

export default {
  name: 'board',
  props: {
    
  },
  components: {
    SingleBoard,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.board-container {
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

  .content {
    display: flex;
    flex-direction: row;
  }
}
</style>
