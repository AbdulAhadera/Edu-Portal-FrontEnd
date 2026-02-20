interface HorizontalLogosProps {
  logos: string[];
}

function HorizontalLogos({ logos }: HorizontalLogosProps) {
  // duplicate logos for seamless scroll
  const schoolLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden">
      <div
        className="py-8"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex gap-12 w-max animate-scroll">
          {schoolLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
            >
              <div className="w-12 h-12 text-white rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center font-semibold text-lg border border-white/20 shrink-0">
                {logo.charAt(0)}
              </div>

              <span className="text-sm font-medium text-white w-32 text-wrap">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* inline animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 50s linear infinite;
          width: fit-content;
        }
      `}</style>
    </div>
  );
}

export default HorizontalLogos;