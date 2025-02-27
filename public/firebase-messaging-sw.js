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
  alert('WE GOT NEW NOTIFICATION')
  console.log('Received background message: ', payload)

  const notificationTitle = payload.notification?.title || 'Default Title'
  const notificationOptions = {
    body: payload.notification?.body || 'No content',
    icon: '/icon512_rounded.png', // Make sure you have this icon in public/
    badge: '/icon512_rounded.png', // Optional: add a small icon for Android
    data: { url: '/' }, // Open your PWA when clicked
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})

self.addEventListener('notificationclick', (event) => {
  console.log('Notification click: ', event)
  event.notification.close()
  event.waitUntil(clients.openWindow(event.notification.data.url))
})
