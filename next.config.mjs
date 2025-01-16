/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: './out',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NODE_ENV === "production"
    ? "https://kimmmm126.github.io/pf/"
    : "",
};

export default nextConfig;
