/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [new URL("http://localhost:3000/**")],
        remotePatterns: [new URL ("http://localhost:4000/**")]
    }
};

export default nextConfig;
