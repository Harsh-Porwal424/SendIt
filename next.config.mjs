/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['firebasestorage.googleapis.com']
    },
    experimental: {
        serverComponentsExternalPackages: [
            '@react-email/components',
            '@react-email/tailwind'
        ]
    }
};

export default nextConfig;