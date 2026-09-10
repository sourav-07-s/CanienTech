import JobCard from "./JobCard";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "ENGINEERING",
    location: "Remote",
    type: "Full Time",
    description:
      "Build responsive and engaging web experiences using modern frontend technologies.",
    skills: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Git",
    ],
  },
  {
    id: 2,
    title: "Backend Developer",
    department: "ENGINEERING",
    location: "Remote",
    type: "Full Time",
    description:
      "Develop scalable APIs and backend systems that power modern digital applications.",
    skills: [
      "Node.js",
      "REST API",
      "Database",
      "Git",
    ],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "DESIGN",
    location: "Hybrid",
    type: "Full Time",
    description:
      "Design intuitive and visually engaging experiences for digital products and platforms.",
    skills: [
      "Figma",
      "UI Design",
      "UX Research",
      "Prototyping",
    ],
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    department: "MARKETING",
    location: "Remote",
    type: "Full Time",
    description:
      "Create digital campaigns and strategies that help businesses grow their online presence.",
    skills: [
      "SEO",
      "Content",
      "Analytics",
      "Social Media",
    ],
  },
];

const CareersOpenings = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        pb-28
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[500px]
          w-[800px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/[0.035]
          blur-[130px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12">
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.3em]
              text-cyan-300
            "
          >
            OPEN POSITIONS
          </p>

          <div
            className="
              mt-3
              h-[2px]
              w-16
              rounded-full
              bg-cyan-300
              shadow-[0_0_10px_#22d3ee]
            "
          />

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              text-white
              sm:text-4xl
            "
          >
            Find Your Next Opportunity
          </h2>

          <p className="mt-4 max-w-2xl text-white/45">
            Explore opportunities to learn, build, collaborate, and
            grow with a technology-focused team.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {jobs.map((job, index) => (
            <JobCard
              key={job.id}
              {...job}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersOpenings;