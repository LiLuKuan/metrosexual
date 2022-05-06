import axios from 'axios';
import $ from 'jquery';

let ApiUrl = '';

export function getCampaign() {
  return axios({
    method: 'get',
    url: ApiUrl + '',
    params: {
      type: 'VOTE',
      status: 'ENABLE',
      pageNumber: 0,
      pageSize: 20
    },
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  });
}

export function getCampaignDetail(dataIdentification) {
  return axios({
    method: 'get',
    url: ApiUrl + '/identification/' + dataIdentification,
    params: {},
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  });
}

export function postCampaign(dataId,postData) {
  return $.ajax({
    type: 'post',
    url: ApiUrl + '/registration/campaign/' + dataId,
    data: postData,
    dataType: 'json',
    processData: false,
    contentType: false,  
    success:function(data) {
      console.log(data);
    },
    error:function(data) {
      console.log(data)
    }
  })
}

