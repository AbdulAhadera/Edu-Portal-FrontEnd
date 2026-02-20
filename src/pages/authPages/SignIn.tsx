import { useEffect, useState } from "react";
import HorizontalLogos from "../../components/HorizantalScroll";
import BaseForm from "../../components/baseComponents/BaseForm";
import type { FieldConfig } from "../../components/baseComponents/BaseType";

const SignIn = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const loginFields: FieldConfig[] = [
    {
      name: "enrollmentId",
      label: "Enrollment ID",
      required: true,
      placeholder: "Enter your enrollment ID",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      placeholder: "Enter your password",
    },
  ];

  const handleFormSubmit = (data: any) => {
    console.log("Login data received:", data);
    const formData = new FormData();
    for (let key in data) {
      if (data[key] instanceof FileList) {
        formData.append(key, data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    }
    console.log("FormData ready:", formData);
  };

  const schoolTestimonials = [
    "Karachi Grammar School",
    "The City School",
    "Beaconhouse School System",
    "Foundation Public School",
    "Habib Public School",
  ];

  const bgImages = [
    "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/10646410/pexels-photo-10646410.jpeg",
  ];

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === bgImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        .si-root { font-family: 'DM Sans', sans-serif; }
        .si-serif { font-family: 'Instrument Serif', serif; }

        /* Staggered reveal */
        .si-reveal {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .si-reveal.in { opacity: 1; transform: translateY(0); }
        .si-reveal.d1 { transition-delay: 0.08s; }
        .si-reveal.d2 { transition-delay: 0.18s; }
        .si-reveal.d3 { transition-delay: 0.30s; }
        .si-reveal.d4 { transition-delay: 0.44s; }

        /* Bg slides */
        .si-slide {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          transition: opacity 1.4s ease;
        }

        /* Slide dots */
        .si-dot {
          height: 5px; border-radius: 999px;
          background: rgba(255,255,255,0.28);
          transition: width 0.35s ease, background 0.35s ease;
          width: 6px; border: none; padding: 0; cursor: pointer;
        }
        .si-dot.active { width: 22px; background: rgba(255,255,255,0.88); }

        /* ── BaseForm overrides ── */
        .si-form label {
          font-family: 'DM Sans', sans-serif !important;
          font-size: 0.7rem !important;
          font-weight: 600 !important;
          letter-spacing: 0.08em !important;
          text-transform: uppercase !important;
          color: var(--text-muted) !important;
          margin-bottom: 6px !important;
          display: block !important;
        }

        .si-form input {
          font-family: 'DM Sans', sans-serif !important;
          font-size: 0.88rem !important;
          color: var(--text-main) !important;
          background: var(--page) !important;
          border: 1.5px solid var(--ui-border) !important;
          border-radius: 6px !important;
          padding: 11px 14px !important;
          width: 100% !important;
          outline: none !important;
          box-shadow: none !important;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease !important;
        }

        .si-form input:focus {
          border-color: var(--primary) !important;
          background: var(--card) !important;
          box-shadow: 0 0 0 3px var(--primary-muted) !important;
        }

        .si-form input::placeholder {
          color: var(--text-muted) !important;
          opacity: 0.5 !important;
        }

        .si-form button[type="submit"] {
          font-family: 'DM Sans', sans-serif !important;
          font-size: 0.88rem !important;
          font-weight: 600 !important;
          letter-spacing: 0.03em !important;
          background: var(--primary) !important;
          color: #fff !important;
          border: none !important;
          border-radius: 6px !important;
          padding: 12px 24px !important;
          width: 100% !important;
          cursor: pointer !important;
          transition: opacity 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease !important;
        }

        .si-form button[type="submit"]:hover {
          opacity: 0.87 !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 6px 20px -6px rgba(79,70,229,0.5) !important;
        }

        .si-form button[type="submit"]:active {
          transform: translateY(0) !important;
        }

        /* Give fields vertical breathing room */
        .si-form > * + * { margin-top: 16px; }
      `}</style>

      <div className="si-root min-h-screen flex flex-col-reverse lg:flex-row bg-page">

        {/* ── LEFT · Hero ── */}
        <div className="lg:w-[55%] relative overflow-hidden min-h-[50vh] lg:min-h-screen">

          {bgImages.map((img, idx) => (
            <div
              key={idx}
              className="si-slide"
              style={{
                backgroundImage: `url(${img})`,
                opacity: idx === currentIndex ? 1 : 0,
              }}
            />
          ))}

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(155deg, rgba(15,23,42,0.78) 0%, rgba(15,23,42,0.52) 55%, rgba(2,6,23,0.85) 100%)",
            }}
          />
          {/* Radial vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 28% 55%, transparent 42%, rgba(0,0,0,0.28) 100%)",
            }}
          />

          <div className="relative z-10 flex flex-col justify-between h-full min-h-[50vh] lg:min-h-screen p-8 lg:p-14">

            {/* Logo mark */}
            <div className={`si-reveal ${loaded ? "in" : ""}`}>
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path
                      d="M6.5 1L11.5 4V9L6.5 12L1.5 9V4L6.5 1Z"
                      stroke="white"
                      strokeWidth="1.3"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-white/65 text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
                  Edu Portal
                </span>
              </div>
            </div>

            <div />

            {/* Bottom content */}
            <div className="space-y-7">
              <div className={`si-reveal d1 ${loaded ? "in" : ""} space-y-2.5`}>
                <p className="text-white/40 text-[0.68rem] tracking-[0.18em] uppercase font-medium">
                  Student Management System
                </p>
                <h1
                  className="si-serif text-white leading-[1.16]"
                  style={{ fontSize: "clamp(1.85rem, 3.6vw, 2.9rem)", fontWeight: 400 }}
                >
                  Built for
                  <br />
                  <em className="text-white/55">every</em> student,
                  <br />
                  every day.
                </h1>
              </div>

              <div
                className={`si-reveal d2 ${loaded ? "in" : ""} h-px`}
                style={{ background: "rgba(255,255,255,0.1)" }}
              />

              <div className={`si-reveal d3 ${loaded ? "in" : ""}`}>
                <p className="text-white/38 text-[0.67rem] tracking-[0.16em] uppercase mb-3 font-medium">
                  Trusted by
                </p>
                <HorizontalLogos logos={schoolTestimonials} />
              </div>

              <div className={`si-reveal d4 ${loaded ? "in" : ""} flex items-center gap-1.5`}>
                {bgImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`si-dot ${idx === currentIndex ? "active" : ""}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT · Form ── */}
        <div className="lg:w-[45%] flex items-center justify-center p-8 lg:p-14 bg-card border-l border-ui-border">
          <div className="w-full max-w-[380px]">

            {/* Header */}
            <div className={`si-reveal ${loaded ? "in" : ""} mb-8`}>
              <span
                className="inline-block text-[0.67rem] font-semibold tracking-[0.12em] uppercase rounded-sm px-2.5 py-1 mb-5"
                style={{ background: "var(--primary-muted)", color: "var(--primary)" }}
              >
                Student Access
              </span>
              <h2
                className="si-serif text-text-main leading-[1.18]"
                style={{ fontSize: "1.9rem", fontWeight: 400 }}
              >
                Welcome back
              </h2>
              <p className="text-text-muted text-sm mt-1.5 leading-relaxed">
                Sign in to access your academic dashboard.
              </p>
            </div>

            {/* Divider */}
            <div className={`si-reveal d1 ${loaded ? "in" : ""} h-px bg-ui-border mb-7`} />

            {/* Form */}
            <div className={`si-form si-reveal d2 ${loaded ? "in" : ""}`}>
              <BaseForm
                fields={loginFields}
                onSubmit={handleFormSubmit}
                submitButtonText="Sign In →"
              />
            </div>

            {/* Help link */}
            <p className={`si-reveal d3 ${loaded ? "in" : ""} mt-5 text-center text-[0.78rem] text-text-muted`}>
              Trouble signing in?{" "}
              <a
                href="#"
                className="text-primary underline underline-offset-4 hover:opacity-75 transition-opacity duration-200"
              >
                Contact your administrator
              </a>
            </p>

            {/* Footer */}
            <div
              className={`si-reveal d4 ${loaded ? "in" : ""} mt-12 pt-5 border-t border-ui-border flex items-center justify-between`}
            >
              <p className="text-[0.67rem] text-text-muted/60 tracking-wide">
                © 2025 Edu Portal
              </p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-[0.67rem] text-text-muted/60">All systems operational</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default SignIn;