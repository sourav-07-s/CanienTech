import { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitted(false);

    // Temporary frontend-only submission simulation.
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-6
        backdrop-blur-2xl
        sm:p-8
      "
    >
      {/* Name + Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-white/65
            "
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={
              errors.name ? "name-error" : undefined
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
                errors.name
                  ? "border-red-400/40 focus:border-red-400/50 focus:ring-red-400/20"
                  : "border-white/10 focus:border-cyan-300/40 focus:ring-cyan-300/20"
              }
            `}
          />

          {errors.name && (
            <p
              id="name-error"
              className="mt-2 text-xs text-red-300"
            >
              {errors.name}
            </p>
          )}
        </div>

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
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email ? "email-error" : undefined
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
              id="email-error"
              className="mt-2 text-xs text-red-300"
            >
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="mt-5">
        <label
          htmlFor="subject"
          className="
            mb-2
            block
            text-sm
            font-medium
            text-white/65
          "
        >
          Subject
        </label>

        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="How can we help?"
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={
            errors.subject ? "subject-error" : undefined
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
              errors.subject
                ? "border-red-400/40 focus:border-red-400/50 focus:ring-red-400/20"
                : "border-white/10 focus:border-cyan-300/40 focus:ring-cyan-300/20"
            }
          `}
        />

        {errors.subject && (
          <p
            id="subject-error"
            className="mt-2 text-xs text-red-300"
          >
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="mt-5">
        <label
          htmlFor="message"
          className="
            mb-2
            block
            text-sm
            font-medium
            text-white/65
          "
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "message-error" : undefined
          }
          className={`
            w-full
            resize-none
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
              errors.message
                ? "border-red-400/40 focus:border-red-400/50 focus:ring-red-400/20"
                : "border-white/10 focus:border-cyan-300/40 focus:ring-cyan-300/20"
            }
          `}
        />

        {errors.message && (
          <p
            id="message-error"
            className="mt-2 text-xs text-red-300"
          >
            {errors.message}
          </p>
        )}
      </div>

      {/* Success Message */}
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
          Your message has been submitted successfully.
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="
          group
          mt-6
          flex
          w-full
          items-center
          justify-center
          gap-2
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
          disabled:cursor-not-allowed
          disabled:opacity-50
          disabled:hover:shadow-none
        "
      >
        {isSubmitting ? (
          <>
            <span
              aria-hidden="true"
              className="
                h-4
                w-4
                animate-spin
                rounded-full
                border-2
                border-cyan-300/30
                border-t-cyan-300
              "
            />

            Sending...
          </>
        ) : (
          <>
            Send Message

            <Send
              size={17}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;