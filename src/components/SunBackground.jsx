import { useEffect, useState } from "react";

export const SunBackground = () => {
    const [clouds, setClouds] = useState([]);

    // Generate clouds
    useEffect(() => {
        const generateClouds = () => {
            const cloudCount = Math.floor(window.innerWidth / 200);
            const newClouds = [];
            for (let i = 0; i < cloudCount; i++) {
                newClouds.push({
                    id: i,
                    size: Math.random() * 40 + 30,
                    left: Math.random() * 100,
                    top: Math.random() * 30 + 10,
                    speed: Math.random() * 0.5 + 0.5,
                    opacity: Math.random() * 0.4 + 0.3,
                });
            }
            setClouds(newClouds);
        };

        generateClouds();

        const handleResize = () => {
            generateClouds();
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Remove scroll effect: no scrollY, no parallax
    const sunScale = 1;
    const cloudParallax = 0;

    // Example land image (royalty-free, unsplash)
    const landImage =
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-sky-300 via-blue-100 to-blue-200">
            {/* Sun */}
            <div
                className="absolute rounded-full bg-yellow-300 transition-transform duration-300"
                style={{
                    width: "120px",
                    height: "120px",
                    top: `15%`,
                    right: `15%`,
                    boxShadow: "0 0 60px 20px rgba(255, 214, 0, 0.4)",
                    transform: `scale(${sunScale})`,
                }}
            >
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="absolute top-1/3 right-1/5 w-3 h-3 bg-yellow-500 rounded-full"></div>
            </div>

            {/* Clouds */}
            {clouds.map((cloud) => (
                <div
                    key={cloud.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        width: `${cloud.size}px`,
                        height: `${cloud.size * 0.6}px`,
                        left: `calc(${cloud.left}% - ${cloudParallax * cloud.speed}px)`,
                        top: `${cloud.top}%`,
                        opacity: cloud.opacity,
                        animation: `moveCloud ${20 / cloud.speed}s linear infinite`,
                    }}
                >
                    <div className="absolute -top-1 -left-2 w-3 h-3 bg-white rounded-full"></div>
                    <div className="absolute -bottom-1 -right-2 w-4 h-3 bg-white rounded-full"></div>
                </div>
            ))}

            {/* Responsive Land image */}
            <div
                className="absolute bottom-0 left-0 w-full"
                style={{
                    zIndex: 2,
                    pointerEvents: "none",
                }}
            >
                <img
                    src={landImage}
                    alt="Beautiful landscape"
                    className="w-full h-auto object-cover"
                    style={{
                        maxHeight: "35vh",
                        minHeight: "120px",
                        width: "100%",
                        objectPosition: "center bottom",
                        filter: "brightness(0.95) saturate(1.1)",
                        display: "block",
                    }}
                />
            </div>

            <style jsx>{`
                @keyframes moveCloud {
                    from { transform: translateX(100vw); }
                    to { transform: translateX(-100px); }
                }
                @media (max-width: 640px) {
                    img {
                        max-height: 22vh !important;
                        min-height: 60px !important;
                    }
                }
            `}</style>
        </div>
    );
};
