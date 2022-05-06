import { isAndroid, isIOS, isBWPlusApp } from '@/utils/browser';

const JsBridge = {
  exposeToNative: (...methods) => {
    methods.forEach(method => {
      if (typeof method !== 'function') return;
      const name = method.name.replace('bound', '').trim();
      window[name] = method;
    });
  },
  setActionBar: actionBarConfig => {
    const param = actionBarConfig;
    if (isBWPlusApp) {
      if (isAndroid) {
        window.BW.setActionBar(JSON.stringify(param));
      } else if (isIOS) {
        window.webkit.messageHandlers.setActionBar.postMessage(param);
      }
    }
  },
  openNewPage: url => {
    if (isBWPlusApp) {
      if (isAndroid) {
        window.BW.openNewPage(url);
      } else if (isIOS) {
        window.webkit.messageHandlers.openNewPage.postMessage(url);
      }
    }
  },
  browserOpen: url => {
    if (isBWPlusApp) {
      if (isAndroid) {
        window.BW.browserOpen(url);
      } else if (isIOS) {
        window.webkit.messageHandlers.browserOpen.postMessage(url);
      }
    }
  },
  goToIndex: (url, index, action) => {
    const config = {
      url: url,
      index: index,
      action: action
    };

    if (isBWPlusApp) {
      if (isAndroid) {
        window.BW.goToIndex(JSON.stringify(config));
      } else if (isIOS) {
        window.webkit.messageHandlers.goToIndex.postMessage(config);
      }
    }
  },
  shareUrl: shareUrlConfig => {
    const param = shareUrlConfig;
    if (isBWPlusApp) {
      if (isAndroid) {
        window.BW.shareUrl(JSON.stringify(param));
      } else if (isIOS) {
        window.webkit.messageHandlers.shareUrl.postMessage(param);
      }
    }
  }
};

export { JsBridge };
