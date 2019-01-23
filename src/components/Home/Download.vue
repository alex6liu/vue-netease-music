<template>
  <div class="download-container">
    <a id="side-download" href="/download" class="btn" hidefocus="true">下载客户端</a>
    <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
    <span class="shadow"></span>
    <span class="shadowr"></span>
  </div>
</template>

<script>
export default {
  name: 'download',
  props: {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.download-container {
  z-index: 20;
  width: 254px;
  height: 336px;
  background: url('../../assets/images/download.png') no-repeat 0 0;
}
.btn {
  display: block;
  width: 215px;
  height: 56px;
  margin-top: 225px;
}
p {
  position: absolute;
  bottom:0;
  margin: 10px auto;
  text-align: center;
  color: #8d8d8d;
}
.shadow {
  display: block;
  position: absolute;
  top: 0;
  left: -20px;
  width: 20px;
  height: 336px;
  background-position: -1px 0;
}
.shadowr {
  left: auto;
  right: -20px;
  background-position: -20px 0;
}
</style>
