import styled from "styled-components";
import { colors } from "../helper/Constants";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChevronDown } from '@fortawesome/free-solid-svg-icons'
library.add(faChevronDown)

const StyledMenu = styled.div`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-self: flex-end;
  margin-left: auto;
  align-items: center;

  button {
    align-items: center;
    font-size: 1rem;
    outline: none;
    border: none;
    background-color: ${colors.WHITE};
    cursor: pointer;
  }

  p {
    margin-left: 2px;
    margin-right: 2px;
  }
`;

const Menu = () => {
  return (
    <StyledMenu>
      <button>Sign In</button>
      <p>|</p>
      <button>More <FontAwesomeIcon style={{color: colors.BLACK}} icon={ ['fas', "chevron-down"] }/></button>
    </StyledMenu>
  );
};

export default Menu;
