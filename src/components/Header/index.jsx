import { MdDarkMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { toggleTheme } from "../../store/slices/themeSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate("/");
  };

  const onChangeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Nav>
      <Name onClick={onNavigate}>Arslan Mushtaq</Name>
      <NavList>
        <DarkModeIconContainer
          className="dark-mode-container"
          onClick={onChangeTheme}
        >
          <DarkModeIcon size={24} />
        </DarkModeIconContainer>

        <NavListItem onClick={onNavigate}>
          <p>Home</p>
        </NavListItem>
      </NavList>
    </Nav>
  );
};

export default Header;

const Name = styled.h4`
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 0px 20px;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

const NavListItem = styled.div`
  background-color: ${({ theme }) => theme.nav_btn_bg};
  width: 120px;
  padding: 20px 0px;
  text-align: center;
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.nav_btn_bg_hover};
    cursor: pointer;
  }
`;

const DarkModeIconContainer = styled.div`
  width: 64px;
  display: flex;
  margin: 0px 12px;
  align-self: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const DarkModeIcon = styled(MdDarkMode)`
  color: ${({ theme }) => theme.text};
`;
