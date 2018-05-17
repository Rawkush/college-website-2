const webPush = require('web-push');

webPush.setVapidDetails(
  `mailto:${process.env.EMAIL_BUSSINESS}`,
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

module.exports = { webPush };
