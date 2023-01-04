import HorizonSliderSection from "../HorizontalSliderSection";

import loading from "../../assets/animations/loading.json";
import AccomplishmentItem from "../AccomplishmentItem";

const Accomplishments = ({ accomplishments = [] }) => {
  return (
    <HorizonSliderSection
      data={accomplishments}
      emptyListAnimation={loading}
      subtitle={"Loading Arslan's Skills"}
      title={"Accomplishments"}
      sectionId={"accomplishments"}
    >
      {accomplishments.map((accomplishment) => (
        <AccomplishmentItem item={accomplishment} key={accomplishment.id} />
      ))}
    </HorizonSliderSection>
  );
};

export default Accomplishments;
