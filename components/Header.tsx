import styled from "styled-components";
import { colors } from "../helper/Constants";
import HamburgerMenu from "./HamburgerMenu";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import FilterMenu from "./FilterMenu";
import SortMenu from "./SortMenu";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;

  h2 {
    margin-left: 1rem;
    margin-right: 1rem;
    color: ${colors.ORANGE};
  }
`;
const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${colors.ORANGE};
`;

const HeaderBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderTop>
        <HamburgerMenu />
        <h2>Affordable Online Degrees</h2>
        <SearchBar />
        <Menu />
      </HeaderTop>
      <HeaderBottom>
        <FilterMenu />
        <SortMenu />
      </HeaderBottom>
    </StyledHeader>
  );
};

export default Header;
