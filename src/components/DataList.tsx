import { PageProps } from "@/types/page";
import { IProject } from "@/types/project";
import { ISkill } from "@/types/skill";
import Section from "./Container";
import { SectionHeadingProps } from "./SectionHeading";

type DataListProps = {
  data: IProject[] | ISkill[];
  listItem: React.FC<IProject | ISkill | any>;
  header: SectionHeadingProps;
  invert?: boolean;
};

const DataList: React.FC<DataListProps & PageProps> = ({
  limit,
  data,
  showHome,
  listItem: ListItem,
  header,
  invert,
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
    </Section>
  );
};

export default DataList;
