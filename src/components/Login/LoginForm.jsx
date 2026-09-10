import { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        mt-8
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-6
        shadow-[0_20px_80px_rgba(0,0,0,0.25)]
        backdrop-blur-2xl
        sm:p-8
      "
    >
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-white/65"
        >
          Email Address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/[0.04]
            px-4
            py-3.5
            text-sm
            text-white
            outline-none
            placeholder:text-white/25
            transition-all
            duration-300
            focus:border-cyan-300/40
            focus:bg-white/[0.06]
            focus:ring-1
            focus:ring-cyan-300/20
          "
        />
      </div>

      {/* Password */}
      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between">
          <label
            htmlFor="password"
            className="text-sm font-medium text-white/65"
          >
            Password
          </label>

          <button
            type="button"
            className="
              text-xs
              font-medium
              text-cyan-300
              transition-colors
              hover:text-white
            "
          >
            Forgot Password?
          </button>
        </div>

        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="Enter your password"
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-3.5
              pr-16
              text-sm
              text-white
              outline-none
              placeholder:text-white/25
              transition-all
              duration-300
              focus:border-cyan-300/40
              focus:bg-white/[0.06]
              focus:ring-1
              focus:ring-cyan-300/20
            "
          />

          <button
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-xs
              font-medium
              text-white/35
              transition-colors
              hover:text-cyan-300
            "
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      {/* Remember */}
      <div className="mt-5 flex items-center gap-2">
        <input
          id="remember"
          name="remember"
          type="checkbox"
          className="
            h-4
            w-4
            accent-cyan-400
          "
        />

        <label
          htmlFor="remember"
          className="text-sm text-white/40"
        >
          Remember me
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="
          group
          mt-7
          flex
          w-full
          items-center
          justify-center
          rounded-xl
          border
          border-cyan-300/25
          bg-cyan-400/10
          px-6
          py-3.5
          text-sm
          font-semibold
          text-cyan-300
          transition-all
          duration-300
          hover:border-cyan-300/40
          hover:bg-cyan-400/20
          hover:text-white
          hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
        "
      >
        Sign In

        <span
          className="
            ml-2
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </button>

      {/* Security note */}
      <div className="mt-6 border-t border-white/10 pt-5 text-center">
        <p className="text-xs leading-6 text-white/25">
          Authorized employees only. Please keep your login
          credentials secure.
        </p>
      </div>
    </form>
  );
};

export default LoginForm;