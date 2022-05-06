<template>
  <div class="swiper-slide"  v-for="(item, index) in items" :key="index">
    <div class="box">
      <div class="imgbox">
        <img :src="`${item.src}`" alt="banner" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slideItem',
  props: {
    items: {
      type:Array
    }
  },
  data() {
    return {
      BaseURL:process.env.BASE_URL
    }
  },
  methods: {
    updateData(){}
  },
  created() {},
  mounted() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {}
}
</script>
