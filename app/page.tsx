'use client'
import { useEffect } from 'react'
import { onMessageListener, requestForToken } from '../core/firebase'

export default function Home() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration)
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error)
        })
    }

    requestForToken()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onMessageListener().then((payload: any) => {
      alert(`New notification: ${payload.notification.title}`)
    })
  }, [])
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Welcome to app</h1>
      <section>is it works ?</section>
      <button>Push </button>
    </div>
  )
}
