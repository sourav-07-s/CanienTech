import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) return;

    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
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
          className="
            mb-2
            block
            text-sm
            font-medium
            text-white/65
          "
        >
          Email Address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={
            errors.email ? "login-email-error" : undefined
          }
          className={`
            w-full
            rounded-xl
            border
            bg-white/[0.04]
            px-4
            py-3.5
            text-sm
            text-white
            outline-none
            placeholder:text-white/25
            transition-all
            duration-300
            focus:bg-white/[0.06]
            focus:ring-1
            ${
              errors.email
                ? "border-red-400/40 focus:border-red-400/50 focus:ring-red-400/20"
                : "border-white/10 focus:border-cyan-300/40 focus:ring-cyan-300/20"
            }
          `}
        />

        {errors.email && (
          <p
            id="login-email-error"
            className="mt-2 text-xs text-red-300"
          >
            {errors.email}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between">
          <label
            htmlFor="password"
            className="
              text-sm
              font-medium
              text-white/65
            "
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
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            aria-invalid={Boolean(errors.password)}
            aria-describedby={
              errors.password ? "login-password-error" : undefined
            }
            className={`
              w-full
              rounded-xl
              border
              bg-white/[0.04]
              px-4
              py-3.5
              pr-12
              text-sm
              text-white
              outline-none
              placeholder:text-white/25
              transition-all
              duration-300
              focus:bg-white/[0.06]
              focus:ring-1
              ${
                errors.password
                  ? "border-red-400/40 focus:border-red-400/50 focus:ring-red-400/20"
                  : "border-white/10 focus:border-cyan-300/40 focus:ring-cyan-300/20"
              }
            `}
          />

          <button
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            aria-label={
              showPassword ? "Hide password" : "Show password"
            }
            className="
              absolute
              right-3
              top-1/2
              flex
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-lg
              text-white/35
              transition-colors
              hover:bg-white/5
              hover:text-cyan-300
            "
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>

        {errors.password && (
          <p
            id="login-password-error"
            className="mt-2 text-xs text-red-300"
          >
            {errors.password}
          </p>
        )}
      </div>

      {/* Remember */}
      <div className="mt-5 flex items-center gap-2">
        <input
          id="remember"
          name="remember"
          type="checkbox"
          className="h-4 w-4 accent-cyan-400"
        />

        <label
          htmlFor="remember"
          className="text-sm text-white/40"
        >
          Remember me
        </label>
      </div>

      {/* Success */}
      {submitted && (
        <div
          role="status"
          className="
            mt-5
            rounded-xl
            border
            border-emerald-300/20
            bg-emerald-400/10
            px-4
            py-3
            text-sm
            text-emerald-300
          "
        >
          Form validated successfully. Authentication is not connected yet.
        </div>
      )}

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

        <ArrowRight
          size={17}
          className="
            ml-2
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </button>

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