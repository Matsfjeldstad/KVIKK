/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    swcMinify:true,
    optimizeFonts:true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                // pathname: "*/**",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                // pathname: "*/**",
            },
        ],
    },
};

module.exports = nextConfig;
