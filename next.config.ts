import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://stugrezwwrkmaoeikjsm.supabase.co/**")],
  },
  reactCompiler: true,
};

export default nextConfig;
