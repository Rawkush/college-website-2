const sw = '[Service Worker]';
const STATIC_CACHE_NAME = 'static-v1';
const DYNAMIC_CACHE_NAME = 'dynamic-v1';

self.addEventListener('install', (e) => {
  console.log(sw, 'Installing Service worker ...', e);
  e.waitUntil(
    caches.open(STATIC_CACHE_NAME).then((cache) => {
      console.log(sw, 'Precaching app shell ...');
      return cache.addAll(['/dist/bundle.js', '/dist/styles.css']);
    })
  );
});

self.addEventListener('activate', (e) => {
  console.log(sw, 'Acivated: ', e);

  e.waitUntil(
    caches.keys().then((keylist) =>
      Promise.all(
        keylist.map((key) => {
          if (key !== STATIC_CACHE_NAME && key !== DYNAMIC_CACHE_NAME) {
            console.log(sw, 'Removing old cache');
            return caches.delete(key);
          }
        })
      )
    )
  );

  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) {
        return res;
      }
      return fetch(e.request).then((response) =>
        caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
          cache.put(e.request.url, response.clone());
          return response;
        })
      );
    })
  );
});

self.addEventListener('push', (e) => {
  let data = {
    title: 'New!',
    content: 'Something',
    openUrl: '/',
  };
  if (e.data) {
    data = JSON.parse(e.data.text());
  }
  const options = {
    body: data.content,
    icon: '/images/icons/icon-96x96.png',
    badge: '/images/icons/icon-96x96.png',
    data: {
      url: data.openUrl,
    },
  };

  e.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener('notificationclick', (event) => {
  const notification = event.notification;
  const action = event.action;

  console.log(notification);

  if (action === 'confirm') {
    console.log('Confirm was chosen');
    notification.close();
  } else {
    console.log(action);
    event.waitUntil(
      clients.matchAll().then((clis) => {
        const client = clis.find((c) => c.visibilityState === 'visible');

        if (client !== undefined) {
          client.navigate(notification.data.url);
          client.focus();
        } else {
          clients.openWindow(notification.data.url);
        }
        notification.close();
      })
    );
  }
});

self.addEventListener('notificationclose', (event) => {
  console.log('Notification was closed', event);
});
