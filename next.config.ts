import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: false, // True caso queira que não rederize os componenetes 2 vezes
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "servicosweb.cnpq.br",
      },
    ],
  },
  output: "export",
  trailingSlash: true, // útil pro GitHub Pages lidar com rotas
};

export default nextConfig;
