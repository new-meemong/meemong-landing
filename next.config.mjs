/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  async redirects() {
    return [
      {
        source: '/((?!app-ads\\.txt$|_next|favicon\\.ico|api|images|icons).*)',
        destination: 'https://www.meemong.com/:path*',
        permanent: false,
        has: [
          {
            type: 'host',
            value: '(?!www\\.meemong\\.com).*',
          }
        ]
      }
    ]
  }
}

export default nextConfig
