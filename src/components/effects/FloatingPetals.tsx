import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const newPetals: Petal[] = [];
    for (let i = 0; i < 15; i++) {
      newPetals.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 15 + Math.random() * 10,
        size: 10 + Math.random() * 15,
      });
    }
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full"
            style={{ fill: `hsla(32, 95%, 50%, ${0.3 + Math.random() * 0.3})` }}
          >
            <path d="M12 2C12 2 8 6 8 10C8 14 12 18 12 18C12 18 16 14 16 10C16 6 12 2 12 2Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;
