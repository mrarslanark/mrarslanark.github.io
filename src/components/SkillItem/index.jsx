import styled from "styled-components";
import { device } from "../../constants/theme";

const SkillItem = ({ item }) => {
  return (
    <ItemContainer className="item-container">
      <Title>{item.title}</Title>
      <hr className="line-divider" />
      <LibrariesContainer>
        <LibraryItem>{item.libraries.join(", ")}</LibraryItem>
      </LibrariesContainer>
    </ItemContainer>
  );
};

export default SkillItem;

const ItemContainer = styled.div`
  width: 300px;
  padding: 16px 24px;
  &:hover {
    background-color: ${({ theme }) => theme.item_container_bg_hover};
  }
  @media ${device.mobileS} {
    width: 270px;
  }
  @media ${device.mobileM} {
    width: 340px;
  }
  @media ${device.mobileL} {
    width: 380px;
  }
  @media ${device.tablet} {
    width: 300px;
  }
`;

const Title = styled.h3`
  margin: 0px 0px 6px 0px;
`;

const LibrariesContainer = styled.div`
  height: 160px;
`;

const LibraryItem = styled.p`
  font-size: medium;
`;
