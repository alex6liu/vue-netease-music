<template>
  <div class="recommend-container">
    <div class="recommend-header">
      <p>热门推荐</p> 
      <p>热门推荐</p> 
      <p>热门推荐</p> 
      <p>热门推荐</p> 
    </div>
    <div class="recommends first">
      <div class="single-recommend">
        <p>single</p>
      </div>
    </div>
    <div class="recommends second">
      <div class="single-recommend">
        <p>single</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  props: {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.recommend-container {

  .recommend-header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .recommends {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>
