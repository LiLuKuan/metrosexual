<template>
  <div class="indexbox">
    <Header />
    <SliderShow />
    <Intro />
    <EventRule />
    <SignUp />
    <Method />
    <Footer />
  </div>
  <FixIcon />
</template>

<script>
import Header from '@/components/Header/Index';
import SliderShow from '@/components/Slider/Index';
import Intro from '@/components/Intro/Index';
import EventRule from '@/components/EventRule/Index';
import SignUp from '@/components/SignUp/Index';
import Method from '@/components/Method/Index';
import Footer from '@/components/Footer/Index';
import FixIcon from '@/components/FixIcon/Index';

export default {
  name: 'Index',
  components: {
    Header,
    SliderShow,
    Intro,
    EventRule,
    SignUp,
    Method,
    Footer,
    FixIcon
  },
  data() {
    return {
      BaseURL:process.env.BASE_URL
    }
  },
  methods: {
    updateData(){},
    getActionBar(){
      let data = new Object();
      let rightButtonArry = new Array();
      let leftButtonArry = new Array();
      let backButton = new Object();
      backButton.order = 1;
      backButton.name = "";
      backButton.icon = "backWhite";
      backButton.action = 0;
      backButton.event = "back";
      leftButtonArry.push(backButton);
      data.title = "花見男活動網站";
      data.type = 0;
      data.backgroundColor = "#cd0505";
      data.behavior = 0;
      data.rightButton = rightButtonArry;
      data.leftButton = leftButtonArry;
      return data;
    },
    defalutValue(){
      let vm = this;
      vm.$jsBridge.exposeToNative(vm.updateData,vm.getActionBar);
      vm.$jsBridge.setActionBar(vm.getActionBar());
    },
    dialog(text){
      let vm = this;
      vm.$swal({
        title: "",
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#dd3333',
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        showCloseButton: true
      }).then((result) => {
        if (result.isConfirmed && result.value) {
          console.log('確定');
        }else if(result.isDismissed && result.dismiss == 'cancel'){
          console.log('取消');
        } else if(result.isDismissed && result.dismiss == 'close'){
          console.log('close');
        }
      });
    }
  },
  created() {},
  mounted() {
    let vm = this;
    vm.defalutValue();
  },
  updated() {},
  beforeUnmount() {},
  unmounted() {}
}
</script>
