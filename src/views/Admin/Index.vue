<template>
  <Common />
  <main id="main" class="main">
    <div class="pagetitle"><h1>{{pageTitle}}</h1></div>
    <div class="box"><span>歡迎</span></div>
  </main>
</template>

<script>
import Common from '@/components/Admin/Common';

export default {
  name: 'Admin',
  metaInfo() {
    return {
      meta: [{
        name: 'keyWords',
        content: 'Zoom'
      }]
    }
  },
  components: {
    Common
  },
  data() {
    return {
      pageTitle:this.$route.meta.title
    }
  },
  methods: {},
  setup() {},
  mounted() {},
  updated() {}
}
</script>
