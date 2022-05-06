<template>
  <div id="slider" class="sliderbox">
    <div class="box" v-if="!isMobile">
      <div class="bg">
        <img id="bgimg" :src="`${BaseURL}assets/images/banner-bg.png`" alt="bg" />
      </div>
      <div class="bannerbox">
        <div class="arrow lt"></div>
        <div class="arrow lb"></div>
        <div class="arrow rt"></div>
        <div class="arrow rb"></div>
        <div class="insidebox">
          <div class="bannerlogo">
            <div class="img">
              <img :src="`${BaseURL}assets/images/logo-content.svg`" alt="logo" />
            </div>
          </div>
          <div class="maintext">
            <span>台灣首次KOL養成實境秀</span>
          </div>
          <div class="imgbox">
            <div class="img">
              <img :src="`${BaseURL}assets/images/banner-text.png`" alt="banner" />
            </div>
          </div>
          <div class="text">
            <span>Taiwan KOL Super Camp 2022</span>
          </div>
          <div class="people">
            <div class="img">
              <img src="/assets/images/banner-people.svg" alt="people" />
              <div class="starstyle star01"></div>
              <div class="starstyle star02"></div>
              <div class="starstyle star03"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box mobile" v-if="isMobile">
      <div class="bg">
        <img id="bgimg" :src="`${BaseURL}assets/images/banner-bg-mobile.png`" alt="bg" />
      </div>
      <div class="mobilebanner">
        <div class="arrow lt"></div>
        <div class="arrow lb"></div>
        <div class="arrow rt"></div>
        <div class="arrow rb"></div>
        <div class="insidebox">
          <div class="bannerlogo">
            <div class="img">
              <img :src="`${BaseURL}assets/images/logo-content.svg`" alt="logo" />
            </div>
          </div>
          <div class="maintext">
            <span>台灣首次KOL養成實境秀</span>
          </div>
          <div class="imgbox">
            <div class="img">
              <img :src="`${BaseURL}assets/images/banner-text.png`" alt="banner" />
            </div>
          </div>
          <div class="text">
            <span>Taiwan KOL Super Camp 2022</span>
          </div>
          <div class="people">
            <div class="img">
              <img src="/assets/images/banner-people.svg" alt="people" />
              <div class="starstyle star01"></div>
              <div class="starstyle star02"></div>
              <div class="starstyle star03"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="scrolldownbox">
      <a href="javascript:void(0)" @click="scrolltoBlock('intro')">
        <img :src="`${BaseURL}assets/images/scrolldown.svg`" alt="scrolldown" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slideIndex',
  components: {},
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {
      BaseURL: process.env.BASE_URL,
      Swiper: '',
      isMobile: false,
      scrollTopHeight: 0
    }
  },
  methods: {
    scrolltoBlock(dataTag) {
      let vm = this;
      let scrollDiv = document.getElementById(dataTag).offsetTop - vm.scrollTopHeight;
      window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
    },
    myEventHandler() {
      let vm = this;
        let element = document.getElementById("slider").getElementsByClassName('box')[0].getElementsByClassName('bannerbox')[0];
      if(window.innerWidth < 767){
        vm.isMobile = true;
      }else{
        vm.isMobile = false;
      }
      setTimeout(function(){
        if(!vm.isMobile){
          vm.setBannerWH();

         element.classList.add("opacity");
        }
      }, 700);
    },
    setBannerWH() {
      let vm = this;
      let sliderBoxTag = document.getElementById("slider").getElementsByClassName('box')[0];
      let sliderImgTag = document.getElementById("slider").getElementsByClassName('box')[0].getElementsByClassName('bannerbox')[0];
      let sliderLeft = (window.innerWidth - sliderImgTag.offsetWidth)/2;
      let sliderTop = (sliderBoxTag.offsetHeight - sliderImgTag.offsetHeight)/2;
      let elementbg = document.getElementById('bgimg');
      if(window.innerWidth < 1200){
        sliderImgTag.style = 'left:'+sliderLeft+'px;top:5%;';
      }else{
        sliderImgTag.style = 'left:'+sliderLeft+'px;top:'+sliderTop+'px;';
      }
      if(window.innerWidth < 1024){
        elementbg.src = vm.BaseURL + 'assets/images/banner-bg-2.png';
      }else if(window.innerWidth < 1200 && window.innerWidth >= 1024){
        elementbg.src = vm.BaseURL + 'assets/images/banner-bg-3.png';
      }else{
        elementbg.src = vm.BaseURL + 'assets/images/banner-bg.png';
      }
    }
  },
  created() {
    let vm = this;
    window.addEventListener("resize", vm.myEventHandler);
  },
  mounted(){
    let vm = this;
    vm.myEventHandler();
    vm.scrollTopHeight = 80;
  },
  updated() {},
  beforeUnmount() {},
  unmounted(){
    let vm = this;
    window.removeEventListener("resize", vm.myEventHandler);
  }
}
</script>
