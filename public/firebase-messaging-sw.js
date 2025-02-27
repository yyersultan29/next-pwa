// public/firebase-messaging-sw.js
importScripts(
  'https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js'
)

const firebaseConfig = {
  apiKey: 'AIzaSyAZyMXEaMfUM9WnZIZwP07PcXrRQjY84EM',
  authDomain: 'next-pwa-89051.firebaseapp.com',
  projectId: 'next-pwa-89051',
  storageBucket: 'next-pwa-89051.firebasestorage.app',
  messagingSenderId: '502710683465',
  appId: '1:502710683465:web:4e0908f48c3c31eff37c98',
  measurementId: 'G-LDD6S4N5CV',
}

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload)
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/icon.png',
  })
})
