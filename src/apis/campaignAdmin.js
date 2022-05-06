import axios from 'axios';
import $ from 'jquery';

let ApiUrl = '';

export function registrationList(dataApprovalStatus,dataPageNumber,dataPageSize) {
  return axios({
    method: 'get',
    url: ApiUrl + '/campaign/registration',
    params: {
      approvalStatus:dataApprovalStatus,
      pageNumber: dataPageNumber,
      pageSize: dataPageSize
    },
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  });
}

export function downloadFile(dataId,dataName) {
  return $.ajax({
    url: ApiUrl + '/campaign/registration/' + dataId + '/attached',
    cache: false,
    xhr: function () {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 2) {
                if (xhr.status == 200) {
                    xhr.responseType = "blob";
                } else {
                    xhr.responseType = "text";
                }
            }
        };
        return xhr;
    },
    success: function (data) {
        let blob = new Blob([data], { type: "application/octetstream" });
        let fileName = dataName + ".zip"
        let isIE = false || !!document.documentMode;
        if (isIE) {
            window.navigator.msSaveBlob(blob, fileName);
        } else {
            let url = window.URL || window.webkitURL;
            let link = url.createObjectURL(blob);
            let a = $('<a href="' + link + '" id="downloadTag" download="'+fileName+'"></a>');
            $("body").append(a);
            a[0].click();
            $("body").remove(a);
        }
    }
  });
}

export function changeStatus(dataId,dataApprovalStatus) {
  let tmpData = {
    "approvalStatus": dataApprovalStatus
  };
  return axios({
    method: 'post',
    url: ApiUrl + '/campaign/registration/' + dataId + '/audit',
    data: JSON.stringify(tmpData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}