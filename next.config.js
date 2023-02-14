/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["arslanmushtaq.files.wordpress.com"],
  },
  experimental: {
    runtime: "experimental-edge",
  },
};

module.exports = nextConfig;
