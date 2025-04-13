/** @type {import('next').NextConfig} */
const nextConfig = {
 headers: async () => [
  {
   source: '/(.*)',
   headers: [
    {
     key: 'Content-Security-Policy',
     value: "frame-ancestors 'self'"
    },
    {
     key: 'Permissions-Policy',
     value: 'camera=(), geolocation=(), microphone=()'
    },
    {
     key: 'Referrer-Policy',
     value: 'strict-origin-when-cross-origin'
    },
    {
     key: 'X-Frame-Options',
     value: 'SAMEORIGIN'
    },
    {
     key: 'Strict-Transport-Security',
     value: 'max-age=63072000; includeSubDomains; preload'
    },
    {
     key: 'X-Content-Type-Options',
     value: 'nosniff'
    },
    {
     key: 'X-XSS-Protection',
     value: '1; mode=block'
    }
   ]
  }
 ]
};

export default nextConfig;
