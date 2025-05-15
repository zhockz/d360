/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
  typescript: {
    ignoreBuildErrors: true,
  },    
};

export default withNextIntl(nextConfig);

