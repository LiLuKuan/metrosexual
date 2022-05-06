<template>
  <div id="loaderbox" class="loaderbox none">
    <div class="loader"></div>
  </div>
  <div id="signupbox" class="signupbox">
    <div class="container-form">
      <div class="insidebox">
        <div class="maintext">
          <span>我要報名</span>
          <div class="vrbox">
            <div class="vrline"></div>
          </div>
        </div>
        <div class="noticebox">
          <span>想要參加全能花美男徵選，請完整填寫下方個人基本資料表格，並上傳清楚個人照及影片後送出資料，便有機會獲得試鏡機會!</span>
        </div>
        <div class="formbox">
          <div class="titlebox">
            <div class="iconbox">
              <img src="/assets/images/icon01.svg" alt="icon" />
            </div>
            <div class="textbox">
              <span>個人資料填寫</span>
            </div>
          </div>
          <div class="indside info">
            <ul class="inputlist">
              <li class="item">
                <div class="title">
                  <span>全名</span>
                </div>
                <div class="inputbox">
                  <ul class="sublist">
                    <li><input type="text" class="form-control" maxlength="10" placeholder="姓" v-model="postData.lastName" /></li>
                    <li><input type="text" class="form-control" maxlength="30" placeholder="名" v-model="postData.firstName" /></li>
                  </ul>
                </div>
              </li>
              <li class="item">
                <div class="title">
                  <span>出生日期</span>
                </div>
                <div class="selectbox">
                  <ul class="sublist">
                    <li>
                      <select name="day" id="day" class="form-control" v-model="day">
                        <option value="">DD</option>
                        <option 
                          v-for="(item, index) in dayArray"
                          :key="index"
                          :value="`${item}`">{{item}}</option>
                      </select>
                    </li>
                    <li>
                      <select name="month" id="month" class="form-control" v-model="month">
                        <option value="">MM</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                    </li>
                    <li>
                      <select name="year" id="year" class="form-control" v-model="year">
                        <option value="" style="color:#949498;">YY</option>
                        <option 
                          v-for="(item, index) in yearArray"
                          :key="index"
                          :value="`${item}`">{{item}}</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="item">
                <div class="title">
                  <span>聯絡電話</span>
                </div>
                <div class="mixbox">
                  <ul class="sublist">
                    <li>
                      <select name="areacode" id="areacode" class="form-control" v-model="postData.countryCode">
                        <option value="886">TW +886</option>
                      </select>
                    </li>
                    <li>
                      <input type="text" id="phone" class="form-control" maxlength="10" placeholder="請輸入電話" v-model="postData.mobile" />
                    </li>
                  </ul>
                </div>
              </li>
              <li class="item">
                <div class="title">
                  <span>E-mail</span>
                </div>
                <div class="inputbox single">
                  <ul class="sublist">
                    <li><input type="text" class="form-control" maxlength="128" placeholder="請輸入E-mail" v-model="postData.email" /></li>
                  </ul>
                </div>
              </li>
              <li class="item expertise">
                <div class="title">
                  <span>專長介紹 (100字以內)</span>
                </div>
                <div class="textareabox">
                  <textarea name="expertise" id="expertise" maxlength="100" class="form-control"  placeholder="請輸入專長" v-model="postData.introduction"></textarea>
                </div>
              </li>
            </ul>
          </div>
          <div class="titlebox">
            <div class="iconbox">
              <img src="/assets/images/icon02.svg" alt="icon" />
            </div>
            <div class="textbox">
              <span>檔案上傳</span>
            </div>
          </div>
          <div class="indside">
            <ul class="inputlist">
              <li class="item updatefile">
                <div class="title">
                  <span>個人照上傳</span>
                </div>
                <div class="inputbox">
                  <div class="input">
                    <input type="text" class="form-control" disabled v-model="photoName" />
                  </div>
                  <div class="btnbox">
                    <input type="file" id="photo" name="photo" class="form-control" @change="previewPhoto" multiple />
                    <label for="photo">上傳</label>
                  </div>
                </div>
                <div class="noticetext">
                  <span>檔案規格：半身、正面清楚照</span>
                </div>
              </li>
              <li class="item updatefile">
                <div class="title">
                  <span>自介短影音上傳 (30MB以內)</span>
                </div>
                <div class="inputbox">
                  <div class="input">
                    <input type="text" class="form-control" disabled v-model="videoName" />
                  </div>
                  <div class="btnbox">
                    <input type="file" id="video" name="video" class="form-control" @change="previewVideo" multiple />
                    <label for="video">上傳</label>
                  </div>
                </div>
                <div class="noticetext">
                  <span>檔案規格：mp4、mov</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="btnbox">
            <button type="button" @click="postCampaignData">
              <span>送出資料</span>
              <div class="img">
                <img src="/assets/images/airline.svg" alt="airline" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="moveiconbox icon01"><img src="/assets/images/signup-img-01.svg" alt="icon01" /></div>
    <div class="moveiconbox icon02"><img src="/assets/images/signup-img-02.svg" alt="icon02" /></div>
    <div class="moveiconbox icon03"><img src="/assets/images/signup-img-03.svg" alt="icon03" /></div>
    <div class="moveiconbox icon04"><img src="/assets/images/signup-img-04.svg" alt="icon04" /></div>
  </div>
</template>

<script>
import { getCampaign, getCampaignDetail } from '@/apis/campaign';
import $ from 'jquery';

export default {
  name: 'SignUp',
  components: {},
  data() {
    return {
      yearArray: [],
      dayArray: [],
      year: 0,
      month: 0,
      day: 0,
      campaignId: "",
      postData: {
        "lastName": "",
        "firstName": "",
        "email": "",
        "countryCode": "886",
        "mobile": "",
        "birthday": "",
        "introduction": "",
        "userPhoto": "",
        "userVideo": ""
      },
      photoName: "",
      videoName: ""
    }
  },
  methods: {
    dialog(text,dataType) {
      let vm = this;
      vm.$swal({
        title: "",
        text: text,
        icon: dataType,
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#dd3333',
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        showCloseButton: false
      }).then((result) => {
        if (result.isConfirmed && result.value) {
          console.log('確定');
        } else if(result.isDismissed && result.dismiss == 'cancel') {
          console.log('取消');
        } else if(result.isDismissed && result.dismiss == 'close') {
          console.log('x');
        }
      });
    },
    setYear() {
      let vm = this;
      let tmpNowYear = parseInt(window.moment().format('YYYY')) + 1;
      for(let i = 1901;i < tmpNowYear;i++) {
        vm.yearArray.push(i);
      }
      vm.yearArray.sort(function (a, b) {
        return b - a
      });
    },
    setDay() {
      let vm = this;
      vm.setYear();
      vm.dayArray = new Array();
      for(let i = 1;i <= 31;i++) {
        if(i < 10){
          i = '0' + i;
        }
        vm.dayArray.push(i);
      }
    },
    getCampaignList() {
      let vm = this;
      getCampaign().then((res) => {
        let tmpResult = res.data.result;
        vm.getCampaignId(tmpResult.content[0].identificationName);
      })
    },
    getCampaignId(dataIdentification) {
      let vm = this;
      getCampaignDetail(dataIdentification).then((res) => {
        let tmpResult = res.data.result;
        let tmpId = tmpResult.id;
        vm.campaignId = tmpId;
      })
    },
    previewPhoto(event) {
      let vm = this;
      vm.postData.userPhoto = event.target.files[0];
      vm.photoName = vm.postData.userPhoto.name;
    },
    previewVideo(event) {
      let vm = this;
      vm.postData.userVideo = event.target.files[0];
      vm.videoName = vm.postData.userVideo.name;
    },
    postCampaignData() {
      let vm = this;
      let tmpPhotoSize = (vm.postData.userPhoto.size / 1024) / 1024;
      let tmpVideoSize = (vm.postData.userVideo.size / 1024) / 1024;
      vm.postData.birthday = window.moment(vm.year+'-'+vm.month+'-'+vm.day).format('x');
      if(!vm.postData.lastName) {
        vm.dialog('請輸入姓','warning');
      } else if(!vm.postData.firstName) {
        vm.dialog('請輸入名','warning');
      } else if(!vm.year || !vm.month || !vm.day) {
        vm.dialog('請選擇生日日期','warning');
      } else if(!vm.postData.mobile) {
        vm.dialog('請輸入聯絡電話','warning');
      } else if(!vm.postData.email) {
        vm.dialog('請輸入Email','warning');
      } else if(!vm.postData.introduction) {
        vm.dialog('請輸入專長介紹','warning');
      } else if(!vm.postData.userPhoto) {
        vm.dialog('請上傳個人照','warning');
      } else if(!vm.postData.userVideo) {
        vm.dialog('請上傳自介短影音','warning');
      } else if(window.moment(parseInt(vm.postData.birthday)).format('x') == 'Invalid date') {
        vm.dialog('生日日期錯誤，請再檢查一下。','warning');
      } else if(!window.IsMobile(vm.postData.mobile)) {
        vm.dialog('聯絡電話格式錯誤，請再檢查一下。','warning');
      } else if(!window.IsEmail(vm.postData.email)) {
        vm.dialog('Email格式錯誤，請再檢查一下。','warning');
      } else if(vm.postData.introduction.length > 100) {
        vm.dialog('請檢查專長介紹，需要100字以內。','warning');
      } else if(tmpPhotoSize > 15) {
        vm.dialog('照片檔案過大，請在檢查一下。','warning');
      } else if(tmpVideoSize > 30){
        vm.dialog('影片檔案過大，請在檢查一下。','warning');
      } else {
        vm.postData.birthday = window.moment(parseInt(vm.postData.birthday)).format('YYYY-MM-DD');
        let formData = new FormData();
        formData.append("lastName", vm.postData.lastName);
        formData.append("firstName", vm.postData.firstName);
        formData.append("email", vm.postData.email);
        formData.append("countryCode", vm.postData.countryCode);
        formData.append("mobile", vm.postData.mobile);
        formData.append("birthday", vm.postData.birthday);
        formData.append("introduction", vm.postData.introduction);
        formData.append("userPhoto", vm.postData.userPhoto);
        formData.append("userVideo", vm.postData.userVideo);
        $('#loaderbox').removeClass('none');
        $.ajax({
          type:'post',
          url:'/api/campaign/v1/registration/campaign/' + vm.campaignId,
          data:formData,
          dataType:'json',
          processData:false,
          contentType:false,  
          success:function(data){
            console.log(data);
            $('#loaderbox').addClass('none');
          },
          error:function(data){
            $('#loaderbox').addClass('none');
            if(data.responseJSON.returnCode == '9010'){
              vm.dialog('找不到活動資料','error');
            } else if(data.responseJSON.returnCode == '9011'){
              vm.dialog('報名資料已存在','error');
            } else {
              vm.dialog('目前網路環境不穩定，請檢查相關設定。','error');
            }
          }
        }).done(function(data){
          if(data.returnCode == '0000'){
            vm.dialog('上傳成功','success').then((result) => {
              console.log(result);
              location.reload();
            });
          }
        });
      }
    }
  },
  created() {},
  mounted() {
    let vm = this;
    vm.setDay(true,'');
    vm.year = window.moment().format('YYYY');
    vm.month = window.moment().format('MM');
    vm.day = window.moment().format('DD');
    vm.getCampaignList();
  },
  updated() {},
  beforeUnmount() {},
  unmounted() {}
}
</script>
