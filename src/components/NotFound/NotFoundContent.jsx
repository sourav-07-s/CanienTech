import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFoundContent = () => {
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
        text-center
      "
    >
      {/* Ambient Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-105
          w-175
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/6
          blur-[130px]
        "
      />

      <div className="relative max-w-2xl">
        <p
          className="
            text-8xl
            font-bold
            tracking-tight
            text-cyan-300
            drop-shadow-[0_0_25px_rgba(34,211,238,0.25)]
            sm:text-9xl
          "
        >
          404
        </p>

        <div
          className="
            mx-auto
            mt-5
            h-0.5
            w-20
            rounded-full
            bg-cyan-300
            shadow-[0_0_12px_#22d3ee]
          "
        />

        <h1
          className="
            mt-7
            text-3xl
            font-bold
            text-white
            sm:text-4xl
          "
        >
          Page Not Found
        </h1>

        <p
          className="
            mx-auto
            mt-5
            max-w-lg
            text-base
            leading-8
            text-white/45
          "
        >
          The page you&apos;re looking for doesn&apos;t exist or may
          have been moved to another location.
        </p>

        <div
          className="
            mt-9
            flex
            flex-col
            items-center
            justify-center
            gap-4
            sm:flex-row
          "
        >
          <Link
            to="/"
            className="
              group
              flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-300/25
              bg-cyan-400/10
              px-7
              py-3.5
              text-sm
              font-semibold
              text-cyan-300
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-300/40
              hover:bg-cyan-400/20
              hover:text-white
            "
          >
            <Home size={17} strokeWidth={1.8} />
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/15
              bg-white/[4
              px-7
              py-3.5
              text-sm
              font-semibold
              text-white/70
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-white/30
              hover:bg-white/8
              hover:text-white
            "
          >
            <ArrowLeft size={17} strokeWidth={1.8} />
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundContent;