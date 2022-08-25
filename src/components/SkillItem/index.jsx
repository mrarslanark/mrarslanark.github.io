import styled from "styled-components";

const SkillItem = ({ item }) => {
  return (
    <ItemContainer className="item-container">
      <h3>{item.title}</h3>
      <br />
      <p>
        {item.experience} {item.duration} of experience
      </p>
      <p>{item.projectsCount} projects</p>
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
`;

const LibrariesContainer = styled.div`
  height: 160px;
`;

const LibraryItem = styled.p`
  font-size: medium;
`;
