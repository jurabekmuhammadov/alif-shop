/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        font: true,
    },
    images: {
        domains: ['cdn.dummyjson.com'],
    },
};

export default nextConfig;
