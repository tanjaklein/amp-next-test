/* import type { NextConfig } from "next"; */

const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'amplify-ampnexttest-tanja-allisonartimages1234567b-ozmq1robkg1j.s3.us-east-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
};

//module.exports = nextConfig;
//export default nextConfig;
module.exports = {

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}
