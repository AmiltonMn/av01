/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [{protocol: "https", hostname: "@/assets"}],
    },

    rewrites: () => {

        return [
            {
                source: "/",
                destination: "/home"
            },
            {
                source: "/Imc",
                destination: "/imc-page"
            },
            {
                source: "/Media",
                destination: "/media-page"
            }
        ]
    }
};

export default nextConfig;
