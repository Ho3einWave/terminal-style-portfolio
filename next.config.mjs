/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    experimental: {
        webpackBuildWorker: true,
        parallelServerBuildTraces: true,
        parallelServerCompiles: true,
    },
    images: {
        remotePatterns: [
            {
                hostname: "data.port0.ir",
            },
        ],
    },
};

export default nextConfig;
