<template>
  <div class="page_404">
    <div class="box">
      <div class="four_zero_four_bg">
        <span>{{statusText.title}}</span>
      </div>
      <div class="contant_box_404">
        <span v-html="statusText.chtText"></span>
        <p v-html="statusText.enText"></p>
        <router-link to="/">{{ statusText.btnText }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'NotFound',
  metaInfo() {
    return {
      meta: [{
        name: 'keyWords',
        content: 'Zoom'
      }]
    }
  },
  setup() {
    const statusText = reactive({ 
      title: "404",
      chtText: "很抱歉，找不到您要瀏覽的網頁",
      enText: "Sorry, we can't find that page. Status Code 404.",
      btnText: "回首頁"
    })
    return {
      statusText
    }    
  }
}
</script>
