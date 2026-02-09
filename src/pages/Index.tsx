import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import RunawayButton from "@/components/RunawayButton";
import coupleImage from "@/assets/valentine-couple.png";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="valentine-gradient min-h-screen flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">
      <FloatingHearts />

      <div className="relative z-10 flex flex-col items-center max-w-lg w-full">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-black text-center mb-4 leading-tight"
          style={{ color: "hsl(var(--valentine-red))" }}>
          ❤️ Will you be my Valentine? ❤️
        </h1>

        {/* Snarky subtext */}
        <p className="text-center text-muted-foreground text-base md:text-lg mb-8 max-w-md leading-relaxed">
          "Think carefully… this decision comes with unlimited love, food stealing rights, and lifetime annoyance."
        </p>

        {/* Photo card */}
        <div className="glow-card animate-pulse-glow rounded-3xl overflow-hidden mb-10 w-64 h-64 md:w-72 md:h-72">
          <img
            src={coupleImage}
            alt="Cute Valentine hearts"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-6 items-center relative">
          <button
            className="btn-yes"
            onClick={() => navigate("/yes")}
          >
            YES 😍
          </button>

          <RunawayButton />
        </div>
      </div>
    </div>
  );
};

export default Index;
