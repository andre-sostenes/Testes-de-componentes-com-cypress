// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: true,
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    };
    return config;
  },
  // Permitir qualquer host
  devServer: {
    allowedHosts: "all",
  },
};

export default nextConfig;
