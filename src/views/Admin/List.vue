<template>
  <Common />
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>{{pageTitle}}</h1>
    </div>
    <div class="box">
      <div class="selectbox">
        <select name="approvalStatus" class="form-control" v-model="approvalStatus" @change="selectValue">
          <option value="NONE">未審核</option>
          <option value="APPROVED">審核通過</option>
          <option value="REJECT">審核不通過</option>
        </select>
      </div>
      <div class="tablebox">
        <div class="table-responsive">
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>id</th>
                <th>姓名</th>
                <th>電話</th>
                <th>信箱</th>
                <th>自我介紹</th>
                <th>檔案</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in result" :key="index">
                <td>{{item.id}}</td>
                <td>{{ item.lastName }}{{ item.firstName }}</td>
                <td>(+{{item.countryCode}}) {{item.mobile}}</td>
                <td>{{item.email}}</td>
                <td>{{item.introduction}}</td>
                <td><a href="javascript:void(0)" class="btn btn-outline-primary" @click="downloadClick(item.id,item.email)">下載檔案</a></td>
                <td>
                  <ul class="btnlist" v-if="approvalStatus == 'NONE'">
                    <li><a href="javascript:void(0)" class="btn btn-success">審核通過</a></li>
                    <li><a href="javascript:void(0)" class="btn btn-danger">審核不通過</a></li>
                  </ul>
                  <ul class="btnlist" v-if="approvalStatus == 'REJECT'">
                    <li><a href="javascript:void(0)" class="btn btn-primary">重新審核</a></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="pagebox">
        <nav class="page-nav">
          <ul class="pagination">
            <li class="page-item" :class="page == item ? 'active' : ''" v-for="(item, index) in pageNum" :key="index"><a class="page-link" href="javascript:void(0)" @click="getList(approvalStatus,(item - 1))">{{item}}</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </main>
</template>

<script>
import Common from '@/components/Admin/Common';
import { registrationList, downloadFile, 
// changeStatus 
} from '@/apis/campaignAdmin';

export default {
  name: 'AdminList',
  metaInfo() {
    return {
      meta: [{
        name: 'keywords',
        content: 'Zoom'
      }]
    }
  },
  components: {
    Common
  },
  data() {
    return {
      pageTitle: this.$route.meta.title,
      approvalStatus:"NONE",
      result:[],
      total:0,
      pageNum:0,
      page:1
    }
  },
  methods: {
    errordialog(text) {
      let vm = this;
      vm.$swal({
        title: "",
        text: text,
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#dd3333',
        confirmButtonText: '確定',
        cancelButtonText: '取消'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log('add new')
        }
      });
    },
    getList(dataApprovalStatus,dataPage) {
      let vm = this;
      vm.page = dataPage + 1;
      registrationList(dataApprovalStatus,dataPage,10).then(res => {
        let tmpData = res.data;
        if(tmpData.returnCode == '0000'){
          vm.result = tmpData.result.content;
          vm.total = tmpData.result.total;
          vm.pageNum = Math.ceil(vm.total/10);
        }
      });
    },
    downloadClick(dataId,dataEmail) {
      downloadFile(dataId,dataEmail);
    },
    selectValue() {
      let vm = this;
      vm.getList(vm.approvalStatus,0);
    }
  },
  setup() {},
  mounted() {
    let vm = this;
    vm.getList(vm.approvalStatus,0);
  },
  updated() {}
}
</script>
