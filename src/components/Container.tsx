import { PropsWithChildren } from "react";
import SectionHeading, { SectionHeadingProps } from "./SectionHeading";

type ContainerProps = {
  invert?: boolean;
  header?: SectionHeadingProps;
  showSeeAll?: boolean;
};

const Section: React.FC<PropsWithChildren<ContainerProps>> = ({
  children,
  invert,
  header,
  showSeeAll = true,
}) => {
  const backgroundColor = invert ? "bg-gray-100" : "bg-white";

  return (
    <section>
      <div className={`flex justify-center items-center ${backgroundColor}`}>
        <div className={"w-[864px] p-12"}>
          {header && (
            <SectionHeading
              heading="Personal Projects"
              subtitle="Projects I work on during my free time"
              seeAllLink="/projects"
              showSeeAll={showSeeAll}
            />
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
