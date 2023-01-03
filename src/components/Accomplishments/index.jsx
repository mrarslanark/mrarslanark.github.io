import HorizonSliderSection from "../HorizontalSliderSection";

import loading from "../../assets/animations/loading.json";
import AccomplishmentItem from "../AccomplishmentItem";

const Accomplishments = ({ accomplishments = [] }) => {
  return (
    <HorizonSliderSection
      ListItem={AccomplishmentItem}
      data={accomplishments}
      emptyListAnimation={loading}
      subtitle={"Loading Arslan's Skills"}
      title={"Accomplishments"}
      sectionId={"accomplishments"}
    />
  );
};

export default Accomplishments;
