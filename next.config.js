/** @type {import('next').NextConfig} */
const nextConfig = {
  
    images:{
        domains:['cdn.sanity.io'],
    },
    
    reactStrictMode: false,
    env: {
        CUSTOM_API_DIR: 'app', // This points to your custom 'app' directory
      },
      
}

module.exports = nextConfig
