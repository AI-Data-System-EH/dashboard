/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.justboil.me',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
