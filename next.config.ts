import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  redirects: async () => {
    return [
      {
        source: '/foo',
        destination: '/bar',
        permanent: false,
      },
    ]
  },
  rewrites: async () => {
    return [
      {
        source: '/baz',
        destination: '/qux',
      },
    ]
  }
};

export default nextConfig;
