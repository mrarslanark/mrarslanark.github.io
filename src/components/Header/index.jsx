import { MdDarkMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { toggleTheme } from "../../store/slices/themeSlice";

const Header = ({ showMenuItems = false }) => {
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
      <NavList>
        {showMenuItems ? (
          <NavListItem onClick={onNavigate}>
            <p>Home</p>
          </NavListItem>
        ) : null}
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
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
