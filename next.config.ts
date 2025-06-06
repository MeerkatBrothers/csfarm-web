import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module?.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3glsafu5ku8f9.cloudfront.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
