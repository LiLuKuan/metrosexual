<template>
  <div id="rule" class="rulebox">
    <div class="outbox">
      <div class="outbg">
        <div class="container-custom">
          <div class="insidebox top">
            <div class="maintext">
              <span>報名方式</span>
              <div class="vrbox">
                <div class="vrline"></div>
              </div>
            </div>
            <div class="stepbox">
              <ul>
                <li>
                  <div class="box">
                    <div class="step">
                      <img src="/assets/images/step01.png" alt="step01" />
                    </div>
                    <div class="stepimg">
                      <img src="/assets/images/step01.svg" alt="step01" />
                    </div>
                    <div class="steptext">
                      <span>填寫</span>
                      <span>活動網頁線上報名表</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="vrbox">
                    <div class="vrline"></div>
                  </div>
                </li>
                <li>
                  <div class="box">
                    <div class="step">
                      <img src="/assets/images/step02.png" alt="step02" />
                    </div>
                    <div class="stepimg">
                      <img src="/assets/images/step02.svg" alt="step02" />
                    </div>
                    <div class="steptext">
                      <span>上傳</span>
                      <span>大頭照及短影音</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="vrbox">
                    <div class="vrline"></div>
                  </div>
                </li>
                <li>
                  <div class="box">
                    <div class="step">
                      <img src="/assets/images/step03.png" alt="step03" />
                    </div>
                    <div class="stepimg">
                      <img src="/assets/images/step03.svg" alt="step03" />
                    </div>
                    <div class="steptext">
                      <span>審核通過</span>
                      <span>寄送試鏡通知</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="vrbox">
                    <div class="vrline"></div>
                  </div>
                </li>
                <li>
                  <div class="box">
                    <div class="step">
                      <img src="/assets/images/step04.png" alt="step04" />
                    </div>
                    <div class="stepimg">
                      <img src="/assets/images/step04.svg" alt="step04" />
                    </div>
                    <div class="steptext">
                      <span>正式入選</span>
                      <span>參加線上訓練比賽</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="insidebox bottom">
            <div class="noticebox">
              <div class="tagbox">
                <div class="tagtext">
                  <img src="/assets/images/star.svg" alt="star" />
                  <span>報名期間 ：即日起 至 2022/5/31止</span>
                </div>
                <div class="tagtext">
                  <img src="/assets/images/star.svg" alt="star" />
                  <span>報名人數：額滿為止</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventRule',
  components: {},
  data() {
    return {
      BaseURL: process.env.BASE_URL
    }
  },
  methods: {},
  created(){},
  mounted(){},
  unmounted(){}
}
</script>
