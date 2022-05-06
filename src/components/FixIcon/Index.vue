<template>
  <div class="fixiconbox" @click="scrolltoBlock('signupbox')">
    <div class="icon">
      <img src="/assets/images/icon.svg" alt="icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FixIcon',
  data() {
    return {}
  },
  methods: {
    scrolltoBlock(dataTag){
      let scrollDiv = document.getElementById(dataTag).offsetTop - 80;
      window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
    }
  },
  created() {},
  mounted() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {}
}
</script>
