<template>
  <div class="container">
    <div>
      <div class="board-list"></div>
      <div class="song-list"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WebHeader from '@/components/WebHeader.vue';

export default {
  name: 'toplist',
  components: {
    WebHeader,
  },
};
</script>