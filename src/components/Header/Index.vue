<template>
  <header>
    <div class="logobox">
      <div class="logo" @click="scrolltoBlock('app')">
        <img src="assets/images/logo.png" alt="logo" />
      </div>
    </div>
    <div class="menubox">
      <ul>
        <li><a href="javascript:void(0)" :class="isAddActive == 1 ? 'active':''" @click="scrolltoBlock('intro')">活動說明</a></li>
        <li><a href="javascript:void(0)" :class="isAddActive == 2 ? 'active':''" @click="scrolltoBlock('rule')">報名方式</a></li>
        <li><a href="javascript:void(0)" :class="isAddActive == 3 ? 'active':''" @click="scrolltoBlock('signupbox')">我要報名</a></li>
        <li><a href="javascript:void(0)" :class="isAddActive == 4 ? 'active':''" @click="scrolltoBlock('method')">試鏡辦法</a></li>
      </ul>
    </div>
    <div class="menubtnbox">
      <div id="menubtnbox" class="menubtn">
        <div id="menu" class="icon" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="menulist" class="menu">
          <ul>
            <li>
              <a href="javascript:void(0)" :class="isAddActive == 1 ? 'active':''" @click="scrolltoBlock('intro')">
                <div class="img">
                  <img :src="isAddActive == 1 ? '/assets/images/menu-star-2.svg' : '/assets/images/menu-star.svg'" alt="menulogo" />
                </div>
                <div class="text">
                  <span>活動說明</span>
                </div>
                <div class="hrline"></div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" :class="isAddActive == 2 ? 'active':''" @click="scrolltoBlock('rule')">
                <div class="img">
                  <img :src="isAddActive == 2 ? '/assets/images/menu-star-2.svg' : '/assets/images/menu-star.svg'" alt="menulogo" />
                </div>
                <div class="text">
                  <span>報名方式</span>
                </div>
                <div class="hrline"></div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" :class="isAddActive == 3 ? 'active':''" @click="scrolltoBlock('signupbox')">
                <div class="img">
                  <img  :src="isAddActive == 3 ? '/assets/images/menu-star-2.svg' : '/assets/images/menu-star.svg'" alt="menulogo" />
                </div>
                <div class="text">
                  <span>我要報名</span>
                </div>
                <div class="hrline"></div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" :class="isAddActive == 4 ? 'active':''" @click="scrolltoBlock('method')">
                <div class="img">
                  <img  :src="isAddActive == 4 ? '/assets/images/menu-star-2.svg' : '/assets/images/menu-star.svg'" alt="menulogo" />
                </div>
                <div class="text">
                  <span>試鏡辦法</span>
                </div>
                <div class="hrline"></div>
                </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { isAndroid, isIOS } from '@/utils/browser';
export default {
  name: 'Header',
  components: {},
  data() {
    return {
      isAddActive:0,
      scrollTopHeight:0
    }
  },
  methods: {
    toggleMenu() {
      document.getElementById('menu').classList.toggle("open");
      document.getElementById('menulist').classList.toggle("active");
      document.getElementById('menubtnbox').classList.toggle("active");
      document.body.classList.toggle("toggle-sidebar");
      document.getElementById('menulist').style.height = (window.innerHeight - 60) + 'px';
    },
    removeToggleMenu() {
      document.getElementById('menu').classList.remove("open");
      document.getElementById('menulist').classList.remove("active");
      document.getElementById('menubtnbox').classList.remove("active");
      document.body.classList.remove("toggle-sidebar");
    },
    scrolltoBlock(dataTag) {
      let vm = this;
      let scrollDiv = document.getElementById(dataTag).offsetTop - vm.scrollTopHeight;
      window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
      vm.removeToggleMenu();
    },
    handleScroll() {
      let vm = this;
      let tmpPageYOffset = window.pageYOffset;
      let tmpIntroOffsetTop = document.getElementById('intro').offsetTop - vm.scrollTopHeight;
      let tmpRuleOffsetTop = document.getElementById('rule').offsetTop - vm.scrollTopHeight;
      let tmpSignUpOffsetTop = document.getElementById('signupbox').offsetTop - vm.scrollTopHeight;
      let tmpMethodOffsetTop = document.getElementById('method').offsetTop - vm.scrollTopHeight;
      if(tmpPageYOffset >= tmpIntroOffsetTop && tmpPageYOffset < tmpRuleOffsetTop){
        vm.isAddActive = 1;
      } else if(tmpPageYOffset >= tmpRuleOffsetTop && tmpPageYOffset < tmpSignUpOffsetTop){
        vm.isAddActive = 2;
      } else if(tmpPageYOffset >= tmpSignUpOffsetTop && tmpPageYOffset < tmpMethodOffsetTop){
        vm.isAddActive = 3;
      } else if(tmpPageYOffset >= tmpMethodOffsetTop){
        vm.isAddActive = 4;
      } else{
        vm.isAddActive = 0;
      }
    }
  },
  created() {
    let vm = this;
    window.addEventListener("scroll", vm.handleScroll);
    vm.scrollTopHeight = isAndroid || isIOS ? 85 : 80;
  },
  mounted() { },
  unmounted() {
    let vm = this;
    window.removeEventListener("resize", vm.handleScroll);
  }
}
</script>
