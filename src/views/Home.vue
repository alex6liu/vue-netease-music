<template>
  <div class="home">
    <web-header></web-header>
  </div>
</template>

<script>
// @ is an alias to /src
import WebHeader from '@/components/WebHeader.vue';

export default {
  name: 'home',
  components: {
    WebHeader,
  },
};
</script>
