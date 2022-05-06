<template>
  <div id="intro" class="introbox">
    <div class="insidebox">
      <div class="intrologo">
        <div class="img">
          <img :src="`${BaseURL}assets/images/logo-content.svg`" alt="logo" />
        </div>
      </div>
      <div class="maintext">
        <span>Taiwan KOL Super Camp 2022</span>
      </div>
      <div class="imgbox">
        <div class="img">
          <img :src="`${BaseURL}assets/images/banner-text.png`" alt="banner" />
        </div>
      </div>
      <div class="articlebox">
        <div class="inside">
          <span>從零創造網路idol的實戰營 <br /> 期待美男們大駕光臨</span>
          <p>在自媒體的時代，想讓更多人看見你，你需要一個「真實」的舞台！<br />痞客邦是台灣最大興趣社群媒體，累積超過 9 億篇文章，有充分的資源，更有排名世界百大網站的傲人流量，成為新時代的網紅、ＫＯＬ的搖籃。</p>
          <p>現在只要覺得自己夠帥、夠酷、夠有有型！只是缺少了機會與動力，我們歡迎你來報名「痞客邦全能花美男」甄選，我們將提供你成為大勢ＫＯＬ所需的資源與魔鬼訓練，為你帶來實現夢想的舞台！</p>
        </div>
      </div>
      <!-- <div class="youtubebox">
        <iframe src="https://www.youtube.com/embed/Wgf_GAZl0ME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  components: {},
  data() {
    return {
      BaseURL: process.env.BASE_URL
    }
  },
  methods: {},
  created() {},
  mounted() {},
  unmounted() {}
}
</script>
