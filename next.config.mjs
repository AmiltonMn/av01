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
            
        ]
    }
};

export default nextConfig;
