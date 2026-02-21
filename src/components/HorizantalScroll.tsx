interface HorizontalLogosProps {
  logos: string[];
}

function HorizontalLogos({ logos }: HorizontalLogosProps) {
  const schoolLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden select-none">
      <div
        className="relative py-6"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <div className="flex gap-10 w-max animate-scroll items-center">
          {schoolLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-4 group/item transition-all duration-500"
            >
              {/* Icon Container: Border white and solid for high visibility */}
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/40 backdrop-blur-md flex items-center justify-center shrink-0 shadow-lg group-hover/item:border-primary group-hover/item:bg-white/20 transition-all">
                <span className="text-white font-bold text-base tracking-tighter">
                  {logo.split(' ').map(word => word[0]).join('').slice(0, 2)}
                </span>
              </div>

              {/* Text Area: Pure white and bold without needing hover */}
              <div className="flex flex-col justify-center">
                <span className="text-[13px] font-bold tracking-[0.12em] text-white uppercase whitespace-nowrap drop-shadow-sm">
                  {logo}
                </span>
                {/* Subtitle: High contrast white/60 */}
                <span className="text-[9px] text-white/60 uppercase tracking-widest font-semibold italic">
                  Partner Institute
                </span>
              </div>

              {/* Separator: Bright white line */}
              <div className="h-4 w-px bg-white/30 mx-4 rotate-20" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default HorizontalLogos;