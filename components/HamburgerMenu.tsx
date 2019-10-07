import styled from "styled-components";
import { colors } from "../helper/Constants";

const StyledHamburgerMenu = styled.div`
  padding: 0.5rem;
  cursor: pointer;
`;

const Bar = styled.div`
  width: 15px;
  height: 2px;
  background-color: black;
  margin: 3px 0;
`;

const HamburgerMenu = () => {
  return (
    <StyledHamburgerMenu>
      <Bar></Bar>
      <Bar></Bar>
      <Bar></Bar>
    </StyledHamburgerMenu>
  );
};

export default HamburgerMenu;
