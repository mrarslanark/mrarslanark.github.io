import { IExperience } from "@/types/experience";
import { PageProps } from "@/types/page";
import { IProject } from "@/types/project";
import { ISkill } from "@/types/skill";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Section from "./Container";
import { SectionHeadingProps } from "./SectionHeading";
import { IEducation } from "@/types/education";

type DataListProps = {
  data: IProject[] | ISkill[] | IExperience[] | IEducation[];
  listItem: React.FC<IProject | ISkill | IExperience | IEducation | any>;
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
      {data.map((item, index) => {
        return (
          <ListItem
            key={item.id}
            isLastItem={index === data.length - 1}
            {...item}
          />
        );
      })}
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
