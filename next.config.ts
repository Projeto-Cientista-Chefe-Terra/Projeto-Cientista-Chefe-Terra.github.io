import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "servicosweb.cnpq.br",
      },
    ],
  },
};

export default nextConfig;

