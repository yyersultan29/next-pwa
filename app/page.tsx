'use client'
import { useEffect } from 'react'
import { onMessageListener, requestForToken } from '../core/firebase'

export default function Home() {
  useEffect(() => {
    const init = () => {
      if (typeof window === 'undefined') return
      if ('serviceWorker' in navigator) {
        navigator?.serviceWorker
          ?.register('/firebase-messaging-sw.js')
          ?.then((registration) => {
            console.log('Service Worker registered:', registration)
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error)
          })
      }

      requestForToken()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onMessageListener()?.then((payload: any) => {
        alert(`New notification: ${payload?.notification?.title}`)
      })
    }
    if (typeof window !== 'undefined') {
      init()
    }
  }, [])
  return (
    <div className="flex flex-col gap-2">
      <h1>Welcome to app</h1>
      <section>is it works ?</section>
      <button
        className="bg-gray-100 p-3 rounded-xl text-red-500"
        onClick={() => alert('how are you!')}
      >
        Push{' '}
      </button>
    </div>
  )
}
