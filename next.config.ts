import type { NextConfig } from 'next'
import Pwa from 'next-pwa'

const withPWA = Pwa({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

const nextConfig: NextConfig = {
  /* config options here */
}

export default withPWA(nextConfig)
