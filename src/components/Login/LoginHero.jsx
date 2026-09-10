import { LogIn } from "lucide-react";

const LoginHero = () => {
  return (
    <div className="text-center">
      <div
        className="
          mx-auto
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          border
          border-cyan-300/20
          bg-cyan-400/10
          text-cyan-300
          shadow-[0_0_30px_rgba(34,211,238,0.08)]
        "
      >
        <LogIn size={25} strokeWidth={1.8} />
      </div>

      <p
        className="
          mt-5
          text-xs
          font-medium
          uppercase
          tracking-[0.3em]
          text-cyan-300
        "
      >
        EMPLOYEE PORTAL
      </p>

      <div
        className="
          mx-auto
          mt-4
          h-[2px]
          w-16
          rounded-full
          bg-cyan-300
          shadow-[0_0_12px_#22d3ee]
        "
      />

      <h1
        className="
          mt-6
          text-3xl
          font-bold
          text-white
          sm:text-4xl
        "
      >
        Welcome
        <span className="text-cyan-300">
          {" "}
          Back
        </span>
      </h1>

      <p className="mt-4 text-sm leading-7 text-white/45">
        Sign in to access your employee portal.
      </p>
    </div>
  );
};

export default LoginHero;