let reg;

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const display = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((swReg) =>
      swReg.showNotification('Yay')
    );
  }
};

const configurePushSub = () => {
  if ('serviceWorker' in Navigator) {
    return;
  }
  navigator.serviceWorker.ready
    .then((swreg) => {
      reg = swreg;
      return swreg.pushManager.getSubscription();
    })
    .then((sub) => {
      if (!sub) {
        const VAPID_PUBLIC_KEY =
          'BJq1av55O8cjvdGWLPXEP4Xsygnh_DwTRDCTBkRLI04SfPbu3a6frqS9Vh4UVVAOlI8lUQCdaXuXR8KgkD5xwY0';
        const encodeKey = urlBase64ToUint8Array(VAPID_PUBLIC_KEY);
        return reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: encodeKey,
        });
      }
      return new Error('You suxx');
    })
    .then((newSub) =>
      fetch('/s/visitor/subscribetonotifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(newSub),
      })
    )
    .then((res) => {
      console.log('Suxxess', res);
      display();
    })
    .catch((err) => {
      console.log(err);
    });
};

const askForNotification = () => {
  Notification.requestPermission((result) => {
    console.log('User Choice: ', result);
    if (result !== 'granted') {
      console.log('Next time');
    } else {
      configurePushSub();
    }
  });
};

setTimeout(askForNotification, 10000);
