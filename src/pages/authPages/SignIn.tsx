import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HorizontalLogos from "../../components/HorizantalScroll";
import BaseForm from "../../components/baseComponents/BaseForm";
import type { FieldConfig } from "../../components/baseComponents/BaseType";
import Button from "../../components/baseComponents/Button";
import { Link } from "react-router-dom"; // Assumed router package

const SignIn = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const loginFields: FieldConfig[] = [
    {
      name: "enrollmentId",
      label: "Enrollment ID",
      required: true,
      placeholder: "e.g. KGS-2024",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      placeholder: "Enter your password",
    },
  ];

  const schoolTestimonials = [
    "Karachi Grammar School", "The City School", "Beaconhouse", "Foundation Public", "Habib Public",
  ];

  const bgImages = [
    "https://images.pexels.com/photos/4678286/pexels-photo-4678286.jpeg",
    "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === bgImages.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <div className="min-h-screen w-full flex bg-card overflow-hidden">
      
      {/* Left Section: 50% Width + Color Images */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden group border-r border-ui-border">
        
        {/* Background Layer - Full Color Cross-fade */}
        <div className="absolute inset-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              // Grayscale removed, Brightness kept at 0.6 for text readability
              className="absolute inset-0 bg-cover bg-center brightness-[0.3] transition-all duration-1000 ease-in-out"
              style={{ backgroundImage: `url(${bgImages[currentIndex]})` }}
            />
          </AnimatePresence>
        </div>

        {/* Static Gradient Overlay - Stronger at bottom for logos visibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/60 via-transparent to-black/80 pointer-events-none" />

        <div className="relative z-20 w-full p-16 flex flex-col justify-between text-white">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-6">
              <span className="font-black text-white text-lg tracking-tighter">A</span>
            </div>
            <span className="font-bold tracking-tight text-xl">Academia.</span>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold leading-[1.1] tracking-tighter">
                Redefining <br />
                <span className="text-primary italic">Education.</span>
              </h1>
              <p className="max-w-md text-lg text-white/80 font-medium leading-relaxed">
                Connect with Pakistan's elite academic network through a unified digital gateway.
              </p>
            </div>

            <div className="pt-10 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-[0.3em] mb-6 font-black text-white/40">
                Partner Institutions
              </p>
              <div className="opacity-100 transition-all duration-1000">
                <HorizontalLogos logos={schoolTestimonials} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: 50% Width Form */}
      <main className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-16 bg-card relative overflow-hidden">
        
        {/* LOG Watermark */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.03] pointer-events-none select-none">
          <h1 className="text-[25rem] font-black tracking-tighter uppercase leading-none text-text-main">
            Log
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-[420px] relative z-10"
        >
          <header className="mb-12">
            <h2 className="text-4xl font-bold text-text-main tracking-tight">Sign In</h2>
            <p className="text-text-muted font-medium mt-2">
              Access your personalized academic dashboard.
            </p>
          </header>

          <BaseForm
            fields={loginFields}
            onSubmit={(data) => console.log(data)}
            submitButtonText="Continue to Portal"
            inputClassName="mt-1 w-full py-2 px-2 bg-page border border-ui-border rounded-2xl focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all duration-300 text-text-main placeholder:text-text-muted/30 font-medium"
          />

          <div className="mt-8 mb-12">
            <p className="text-sm text-text-muted/70">
              <Link to="/register-school" className="text-primary font-bold hover:underline">
                School registration
              </Link>
              {" "}is exclusively managed by school administrators.
            </p>
          </div>

          <footer className="pt-6 border-t border-ui-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button
              variant="ghost"
              className="p-0 h-auto text-sm font-bold text-text-muted hover:text-primary transition-colors"
              text="Forgot Credentials?"
            />

            <p className="text-[11px] text-text-muted/60 text-center sm:text-right italic leading-tight">
              Authorized access only. <br /> © 2026 Academia Systems.
            </p>
          </footer>
        </motion.div>
      </main>
    </div>
  );
};

export default SignIn;