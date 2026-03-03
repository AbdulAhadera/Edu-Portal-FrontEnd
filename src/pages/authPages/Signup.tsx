import { Link } from "react-router-dom";
import BaseForm from "../../components/baseComponents/BaseForm";
import type { FieldConfig } from "../../components/baseComponents/BaseType";
import logo from "../../../public/logo.png";

const SignUp = () => {
  // Pure UI ke liye clean input styling
  const inputClass =
    "mt-1 w-full py-2 px-2 bg-page border border-ui-border rounded-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all duration-300 text-text-main placeholder:text-text-muted/30 font-medium text-sm";

  // Form fields ka array (Standard fields)
  const fields: FieldConfig[] = [
    {
      name: "schoolName",
      label: "School Name",
      required: true,
      placeholder: "School Name",
    },
    {
      name: "principalName",
      label: "Principal Name",
      required: true,
      placeholder: "Principal Name",
    },
    {
      name: "principalEmail",
      label: "Principal Email",
      type: "email",
      required: true,
      placeholder: "Principal Email",
    },
    {
      name: "phoneNumber",
      label: "Phone Number",
      type: "number",
      required: true,
      placeholder: "Phone Number",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      placeholder: "Password",
    },
    {
      name: "confirmPassword",
      label: "Repeat Password",
      type: "password",
      required: true,
      placeholder: "Repeat Password",
    },
    {
      name: "address1",
      label: "Address 1",
      required: true,
      placeholder: "Street, Area, Building",
    },
    {
      name: "zipCode",
      label: "Zip Code",
      type: "number",
      required: true,
      placeholder: "Zip Code",
    },
  ];

  // Yeh function poora data (address dropdowns ke sath) console karega
  const handleFinalSubmit = (data: any) => {
    console.log("Form Submitted Successfully:", data);
  };

  return (
    <div className="h-screen w-full flex bg-card overflow-hidden font-sans">
      {/* LEFT SECTION (50% SPLIT) */}
      <div className="hidden lg:flex lg:w-1/2 h-full relative overflow-hidden shrink-0 border-r border-ui-border">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center brightness-[0.5]"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/5212331/pexels-photo-5212331.jpeg')`,
            }}
          />
        </div>
        <div className="absolute inset-0 z-10 bg-linear-to-t from-black/90 via-transparent to-black/30" />
        <div className="relative z-20 w-full p-16 flex flex-col justify-between text-white">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-sm flex items-center justify-center shadow-lg font-black text-lg">
              <img src={logo} />
            </div>
            <span className="font-bold tracking-tight text-xl">
              Prism - Spectrum of Smart Learning.
            </span>
          </div>
          <div>
            <h1 className="text-5xl font-bold leading-tight tracking-tighter">
              Institutional <br />
              <span className="text-primary">Onboarding.</span>
            </h1>
            <p className="mt-4 text-white/60 max-w-sm">
              Access the most powerful school management engine in the region.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION (FORM 50% SPLIT) */}
      <main className="w-full lg:w-1/2 h-full overflow-y-auto bg-card relative custom-scrollbar">
        <div className="w-full max-w-[620px] mx-auto px-8 py-16">
          <header className="mb-8 border-b border-ui-border pb-6">
            <h2 className="text-3xl font-bold text-text-main tracking-tight">
              Create School Account
            </h2>
            <p className="text-text-muted font-medium mt-1 text-sm">
              Please provide the following institutional details.
            </p>
          </header>

          <BaseForm
            fields={fields}
            onSubmit={handleFinalSubmit}
            address={true} // this will add the country/state/city dropdowns
            formClassName="SignUp grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3"
            inputClassName={inputClass}
            submitButtonText="Register Institution"
            submitButtonClassName="w-full py-3 bg-primary text-white font-bold rounded-sm mt-8 md:col-span-2 shadow-md hover:opacity-90 transition-all active:scale-[0.98]"
          />

          <footer className="mt-12 pt-6 border-t border-ui-border flex items-center justify-between">
            <p className="text-xs text-text-muted font-medium">
              Registered?{" "}
              <Link to="/" className="text-primary font-bold cursor-pointer">
                Sign In
              </Link>
            </p>
            <p className="text-[10px] text-text-muted/40 font-bold uppercase tracking-widest">
              Academic Security Protocol v2.0
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
