import { useState } from 'react'
import { getToken, Messaging } from 'firebase/messaging'
import { messaging } from '../core/firebase'

const NotificationPrompt = () => {
  const [showModal, setShowModal] = useState(false)
  const [permissionGranted, setPermissionGranted] = useState(false)

  const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission()
      if (permission === 'granted') {
        setPermissionGranted(true)
        console.log('✅ Notifications allowed')

        // Get FCM Token
        const token = await getToken(messaging as Messaging, {
          vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
        })
        console.log('🔑 FCM Token:', token)
      } else {
        console.warn('❌ Notifications denied')
      }
    } catch (error) {
      console.error('⚠️ Error requesting permission:', error)
    }
  }

  return (
    <div>
      {!permissionGranted && (
        <button onClick={() => setShowModal(true)}>Enable Notifications</button>
      )}

      {showModal && (
        <div className="modal">
          <h2>Enable Notifications</h2>
          <p>Do you want to receive notifications?</p>
          <button
            className="p-3 bg-green-300 rounded-lg"
            onClick={requestNotificationPermission}
          >
            Yes, Enable
          </button>
          <button
            className="bg-red-500 p-3 rounded-lg"
            onClick={() => setShowModal(false)}
          >
            No, Thanks
          </button>
        </div>
      )}
    </div>
  )
}

export default NotificationPrompt
