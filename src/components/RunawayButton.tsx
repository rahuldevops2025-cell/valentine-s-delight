import { useState, useCallback } from "react";

const SNARKY_MESSAGES = [
  "Nice try. 😏",
  "Not today!",
  "You can't catch me! 💨",
  "Haha, nope!",
  "Wrong answer! 🙃",
  "Try again... oh wait, don't.",
  "I'm too fast for you!",
  "❌ Access denied",
];

const RunawayButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isAbsolute, setIsAbsolute] = useState(false);
  const [message, setMessage] = useState("");

  const runAway = useCallback(() => {
    setIsAbsolute(true);
    const x = Math.random() * (window.innerWidth - 200) - window.innerWidth / 2 + 100;
    const y = Math.random() * (window.innerHeight - 100) - window.innerHeight / 2 + 50;
    setPosition({ x, y });
    setMessage(SNARKY_MESSAGES[Math.floor(Math.random() * SNARKY_MESSAGES.length)]);
    setTimeout(() => setMessage(""), 1500);
  }, []);

  return (
    <div className="relative">
      <button
        className="btn-no"
        style={{
          position: isAbsolute ? "fixed" : "relative",
          left: isAbsolute ? `calc(50% + ${position.x}px)` : undefined,
          top: isAbsolute ? `calc(50% + ${position.y}px)` : undefined,
          transform: isAbsolute ? "translate(-50%, -50%)" : undefined,
          zIndex: 50,
          transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        onMouseEnter={runAway}
        onTouchStart={runAway}
        onClick={runAway}
      >
        NO 😏
      </button>
      {message && (
        <div
          className="fixed z-50 rounded-full px-4 py-2 text-sm font-semibold animate-fade-in"
          style={{
            left: `calc(50% + ${position.x}px)`,
            top: `calc(50% + ${position.y - 50}px)`,
            transform: "translate(-50%, -50%)",
            background: "hsl(var(--valentine-hot))",
            color: "white",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default RunawayButton;
