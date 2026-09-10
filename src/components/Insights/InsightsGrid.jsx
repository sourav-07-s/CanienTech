import InsightArticleCard from "./InsightArticleCard";

const articles = [
  {
    id: 1,
    category: "AI & INNOVATION",
    title: "How AI Is Transforming Modern Businesses",
    description:
      "Discover how artificial intelligence can improve decision-making, automate workflows, and unlock new opportunities.",
    date: "Innovation",
  },
  {
    id: 2,
    category: "CLOUD",
    title: "Why Cloud Technology Matters for Growth",
    description:
      "Explore how cloud platforms help businesses build flexible, secure, and scalable digital infrastructure.",
    date: "Technology",
  },
  {
    id: 3,
    category: "CYBERSECURITY",
    title: "Building a Stronger Digital Security Strategy",
    description:
      "Understand the key principles businesses can use to protect systems, data, and digital operations.",
    date: "Security",
  },
  {
    id: 4,
    category: "DIGITAL ENGINEERING",
    title: "Designing Scalable Digital Products",
    description:
      "Learn how modern engineering practices can help teams build reliable products that scale with changing requirements.",
    date: "Engineering",
  },
  {
    id: 5,
    category: "DIGITAL EXPERIENCE",
    title: "Creating Better Customer Experiences",
    description:
      "Explore how thoughtful UX and digital strategy can create more useful and engaging customer journeys.",
    date: "Experience",
  },
  {
    id: 6,
    category: "TRANSFORMATION",
    title: "Turning Digital Strategy Into Business Value",
    description:
      "Understand how organizations can connect technology investments with practical business outcomes.",
    date: "Strategy",
  },
];

const InsightsGrid = () => {
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
          h-125
          w-200
          -translate-x-1/2
          rounded-full
          bg-cyan-500/[0.035]
          blur-[130px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <InsightArticleCard
              key={article.id}
              {...article}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsGrid;