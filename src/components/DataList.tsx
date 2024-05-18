import { IExperience } from "@/types/experience";
import { PageProps } from "@/types/page";
import { IProject } from "@/types/project";
import { ISkill } from "@/types/skill";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Section from "./Section";
import { SectionHeadingProps } from "./SectionHeading";
import { IAchievement, IEducation } from "@/types/education";
import { ICertifications } from "@/types/certifications";

type DataListProps = {
  data:
    | IProject[]
    | ISkill[]
    | IExperience[]
    | IEducation[]
    | ICertifications[]
    | IAchievement[];
  listItem: React.FC<
    | IProject
    | ISkill
    | IExperience
    | IEducation
    | ICertifications
    | IAchievement
    | any
  >;
  header: SectionHeadingProps;
  invert?: boolean;
  seeAll?: {
    url: string;
    type: string;
  };
};

const DataList: React.FC<DataListProps & PageProps> = ({
  limit,
  data,
  showHome,
  listItem: ListItem,
  header,
  invert,
  seeAll,
}) => {
  if (limit) {
    data = data.slice(0, limit);
  }

  return (
    <Section header={header} showHomeBtn={showHome} invert={invert}>
      <div className="flex flex-wrap gap-2 my-2">
        {data.map((item, index) => {
          return (
            <ListItem
              key={item.id}
              isLastItem={index === data.length - 1}
              {...item}
            />
          );
        })}
      </div>
      {Boolean(seeAll !== undefined) ? (
        <Link
          href={seeAll?.url!}
          className="flex items-center gap-1 my-4 underline hover:animate-pulse"
        >
          See all {data.length + (limit ?? 0)} {seeAll?.type}{" "}
          <IoIosArrowRoundForward className="text-black" size={24} />
        </Link>
      ) : null}
    </Section>
  );
};

export default DataList;
