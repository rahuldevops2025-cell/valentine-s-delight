import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
  type: "confetti" | "heart";
}

const COLORS = [
  "hsl(340, 82%, 62%)",
  "hsl(280, 45%, 70%)",
  "hsl(42, 90%, 60%)",
  "hsl(350, 70%, 55%)",
  "hsl(340, 60%, 94%)",
  "hsl(0, 0%, 100%)",
];

const Confetti = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 4,
      size: 6 + Math.random() * 10,
      type: Math.random() > 0.6 ? "heart" : "confetti",
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: "-20px",
            fontSize: p.type === "heart" ? `${p.size + 4}px` : undefined,
            width: p.type === "confetti" ? `${p.size}px` : undefined,
            height: p.type === "confetti" ? `${p.size * 0.6}px` : undefined,
            backgroundColor: p.type === "confetti" ? p.color : undefined,
            borderRadius: p.type === "confetti" ? "2px" : undefined,
            animation: `confetti-fall ${p.duration}s ease-in ${p.delay}s infinite`,
          }}
        >
          {p.type === "heart" ? "❤️" : null}
        </span>
      ))}
    </div>
  );
};

export default Confetti;
