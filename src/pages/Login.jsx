import LoginHero from "../components/Login/LoginHero";
import LoginForm from "../components/Login/LoginForm";

export const Login = () => {
  return (
    <section
      className="
        relative
        flex
        min-h-[calc(100vh-80px)]
        items-center
        justify-center
        overflow-hidden
        px-6
        py-24
      "
    >
      {/* Ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-125
          w-175
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/6
          blur-[140px]
        "
      />

      <div className="relative w-full max-w-md">
        <LoginHero />
        <LoginForm />
      </div>
    </section>
  );
};