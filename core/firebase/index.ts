'use client'
// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import {
  getMessaging,
  getToken,
  Messaging,
  onMessage,
} from 'firebase/messaging'

const firebaseConfig = {
  apiKey: 'AIzaSyAZyMXEaMfUM9WnZIZwP07PcXrRQjY84EM',
  authDomain: 'next-pwa-89051.firebaseapp.com',
  projectId: 'next-pwa-89051',
  storageBucket: 'next-pwa-89051.firebasestorage.app',
  messagingSenderId: '502710683465',
  appId: '1:502710683465:web:4e0908f48c3c31eff37c98',
  measurementId: 'G-LDD6S4N5CV',
}

// Initialize Firebase
const app =
  typeof window !== 'undefined' ? initializeApp(firebaseConfig) : undefined

export const messaging = typeof window !== 'undefined' ? getMessaging(app) : ''

export const requestForToken = async () => {
  if (!messaging) {
    console.log('Firebase Messaging is only available on the client.')
    return
  }

  try {
    const permission = await Notification.requestPermission()
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey:
          'BKQlaEPL7Q1wabWxfPbY8PvwT5Bd_snuP1dh0rX76uVJ04WiXXZV5iXuJaLUagt-jssX1xLs4DhP6OWvmngXQCM',
      })
      console.log('FCM Token:', token)
      return token
    }
  } catch (error) {
    console.error('Error getting FCM token', error)
  }
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging as Messaging, (payload) => {
      console.log('Message received:', payload)
      resolve(payload)
    })
  })
