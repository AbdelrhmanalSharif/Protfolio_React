import { useEffect, useState, useRef } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const meteorTimeout = useRef(null);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    // Meteor interval: every 1 min
    const interval = setInterval(() => {
      generateMeteors();
    }, 60000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
      if (meteorTimeout.current) clearTimeout(meteorTimeout.current);
    };
    // eslint-disable-next-line
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  // Fast meteors, right to left, every 1 min
  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: 100 + Math.random() * 10, // Start just off the right edge
        y: Math.random() * 20,
        delay: Math.random() * 0.5, // Small random delay for realism
        animationDuration: 0.8 + Math.random() * 0.4, // Fast: 0.8s - 1.2s
      });
    }

    setMeteors(newMeteors);

    // Remove meteors after animation to hide them until next minute
    if (meteorTimeout.current) clearTimeout(meteorTimeout.current);
    meteorTimeout.current = setTimeout(() => setMeteors([]), 1500);
  };

  const landImage =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800">
      {/* Moon */}
      <div
        className="absolute rounded-full bg-gray-200 transition-transform duration-300"
        style={{
          width: "100px",
          height: "100px",
          top: `12%`,
          right: `13%`,
          boxShadow: "0 0 60px 20px rgba(200, 200, 255, 0.25)",
          transform: `scale(1)`,
        }}
      >
        {/* Craters */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-gray-300 rounded-full opacity-60"></div>
        <div className="absolute top-1/2 right-1/5 w-3 h-3 bg-gray-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-gray-400 rounded-full opacity-40"></div>
      </div>

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            position: "absolute",
            borderRadius: "50%",
            background: "white",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
            position: "absolute",
            background: "linear-gradient(90deg, white, transparent)",
            borderRadius: "999px",
            opacity: 0.7,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Land image */}
      <img
        src={landImage}
        alt="Beautiful landscape"
        className="absolute bottom-0 left-0 w-full object-cover"
        style={{
          height: "35vh",
          zIndex: 2,
          pointerEvents: "none",
          objectPosition: "center bottom",
          filter: "brightness(0.7) saturate(1.1)",
        }}
      />

      <style jsx>{`
        .animate-pulse-subtle {
          animation: pulse-subtle 2s infinite alternate;
        }
        @keyframes pulse-subtle {
          from { opacity: 0.7; }
          to { opacity: 1; }
        }
        .animate-meteor {
          animation: meteor-fall linear forwards;
        }
        @keyframes meteor-fall {
          0% {
            opacity: 0;
            transform: translateX(0) translateY(0) scaleX(1);
          }
          10% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(-120vw) translateY(100px) scaleX(0.7);
          }
        }
      `}</style>
    </div>
  );
};
