/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    storyblokApiToken: process.env.STORYBLOK_API_TOKEN,
  },
};

module.exports = nextConfig;
