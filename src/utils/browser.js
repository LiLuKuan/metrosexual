import { isAndroid, isIOS } from 'mobile-device-detect';

const isBWPlusApp = navigator.userAgent.indexOf('Name/BW') > -1;

export { isAndroid, isIOS, isBWPlusApp };
