import Confetti from "@/components/Confetti";
import FloatingHearts from "@/components/FloatingHearts";
import celebrationImage from "@/assets/valentine-celebration.png";

const YesPage = () => {
  return (
    <div className="celebration-gradient min-h-screen flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">
      <Confetti />
      <FloatingHearts />

      <div className="relative z-20 flex flex-col items-center max-w-lg w-full">
        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl font-black text-center mb-4 leading-tight animate-scale-in"
          style={{ color: "hsl(var(--valentine-cream))" }}
        >
          🎉 YAY! You're officially my Valentine ❤️ 🎉
        </h1>

        {/* Message */}
        <p
          className="text-center text-base md:text-lg mb-10 max-w-md leading-relaxed animate-fade-in"
          style={{ color: "hsl(var(--valentine-blush))" }}
        >
          "Congratulations on choosing the best Valentine ever. I promise love,
          laughter, and only mild emotional drama."
        </p>

        {/* Celebration image */}
        <div className="glow-card rounded-3xl overflow-hidden w-72 h-72 md:w-80 md:h-80 animate-zoom-photo mb-8">
          <img
            src={celebrationImage}
            alt="Celebration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Extra cute text */}
        <p
          className="text-center text-sm animate-fade-in font-semibold"
          style={{
            color: "hsl(var(--valentine-gold))",
            animationDelay: "1s",
            animationFillMode: "both",
          }}
        >
          💕 Now go make some memories together 💕
        </p>
      </div>
    </div>
  );
};

export default YesPage;
