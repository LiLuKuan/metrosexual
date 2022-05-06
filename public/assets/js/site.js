function IsEmail(email) {
  let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return !regex.test(email) ? false : true;
}

function IsMobile(mobile) {
  if(mobile == "") {
    return false;
  } else {
    if( ! /^0{0,1}(13[0-9]|15[0-9]|18[0-9]|14[0-9])[0-9]{8}$/.test(mobile) ) {
      return false;
    }
    return true;
  }
}

function IsMobile(strPhone){
  let cellphone = /^09[0-9]{8}$/;
  if(cellphone.test(strPhone)) {
    return true;
  } else {
    return false;
  }
}