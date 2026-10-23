/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // the old SPA treated /about as /me
      { source: '/about', destination: '/me', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
    ]
  },
}

export default nextConfig
