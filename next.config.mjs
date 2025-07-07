/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["rcljtsnaqwlqnbwknsdm.supabase.co"],
  },
  env: {
    UMAMI_API_KEY: process.env.UMAMI_API_KEY,
    UMAMI_WEBSITE_ID: process.env.UMAMI_WEBSITE_ID,
  },
};

export default nextConfig;
