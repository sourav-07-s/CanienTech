import SectionHeading from "../ui/SectionHeading";
import StoryCard from "./StoryCard";
import { stories } from "../data/stories";

const SuccessStories = () => {
  return (
    <section
      className="
        bg-linear-to-br
        from-blue-950
        via-blue-900
        to-blue-800
        px-6
        py-28
      "
    >

      <div className="mx-auto max-w-7xl">

        <SectionHeading
          label="SUCCESS STORIES"
          title="Transforming Businesses Globally"
          description="Discover how innovation and technology can create meaningful business outcomes."
        />

        <div className="
          mt-16
          grid
          gap-8
          lg:grid-cols-2
        ">

          {stories.map((story, index) => (
            <StoryCard
              key={story.id}
              {...story}
              delay={index * 150}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default SuccessStories;