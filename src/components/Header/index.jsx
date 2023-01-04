import { MdDarkMode } from "react-icons/md";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { toggleTheme } from "../../store/slices/themeSlice";
import { device } from "../../constants/theme";

const blogMenuItems = [
  {
    id: "home",
    to: "/",
    title: "Home",
  },
];

const homeMenuItems = [
  {
    id: "me",
    to: "#",
    title: "Me",
  },
  {
    id: "projects",
    to: "#projects",
    title: "Projects",
  },
  {
    id: "skills",
    to: "#skills",
    title: "Skills",
  },
  {
    id: "accomplishments",
    to: "#accomplishments",
    title: "Accomplishments",
  },
  {
    id: "blog",
    to: "#blog",
    title: "Blog",
  },
  {
    id: "connect",
    to: "#connect",
    title: "Connect",
  },
];

function displayMenuItems(menu) {
  return menu === "home" ? homeMenuItems : blogMenuItems;
}

const Header = ({ menu = "home" }) => {
  const dispatch = useDispatch();

  const onChangeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Nav>
      <NavList>
        {displayMenuItems(menu).map((item) => {
          return (
            <NavListItem key={item.id} href={item.to}>
              {item.title}
            </NavListItem>
          );
        })}
        <DarkModeIconContainer
          className="dark-mode-container"
          onClick={onChangeTheme}
        >
          <DarkModeIcon size={24} />
        </DarkModeIconContainer>
      </NavList>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.nav_btn_bg};
  z-index: 100;
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.mobileM} {
    display: none;
  }
  @media ${device.mobileL} {
    display: none;
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: flex-end;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
`;

const NavListItem = styled.a`
  background-color: ${({ theme }) => theme.nav_btn_bg};
  padding: 16px 16px;
  text-align: center;
  transition: 0.3s;
  text-decoration: none;
  height: 60px;
  &:hover {
    background-color: ${({ theme }) => theme.nav_btn_bg_hover};
    cursor: pointer;
  }
`;

const DarkModeIconContainer = styled.button`
  width: 64px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  border: none;
  &:hover {
    background-color: ${({ theme }) => theme.nav_btn_bg_hover};
    cursor: pointer;
  }
`;

const DarkModeIcon = styled(MdDarkMode)`
  color: ${({ theme }) => theme.text};
`;
