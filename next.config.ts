import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/astra",
        destination: "/projects/stars-converter",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
