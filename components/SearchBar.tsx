import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

import styled from "styled-components";
import { colors } from "../helper/Constants";
import { connect, useDispatch } from "react-redux";
import { search } from "../actions";

const StyledSearchBar = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  align-items: center;
  padding-left: 2rem;
  height: 1.5rem;
`;

const Input = styled.input`
  box-size: border-box;
  height: 80%;
  width: 20rem;
  min-width: 10rem;
  border-radius: .25rem 0rem 0rem .25rem;
  border-style: solid;
  border-width: 1px 0px 1px 1px;
  border-color: ${colors.LIGHT_GREY}
  outline: none;
  box-shadow: none;
  padding-left: .5rem;
`;

const Submit = styled.button`
  box-size: border-box;
  height: 100%;
  background-color: ${colors.ORANGE};
  border: none;
  border-radius: 0rem 0.25rem 0.25rem 0rem;
  box-shadow: none;
`;

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const submitTerm = () => {
    if (searchTerm !== "") {
      search(dispatch, searchTerm.toLowerCase());
    }
  };

  return (
    <StyledSearchBar>
      <Input
        value={searchTerm}
        onChange={e => {
          setSearchTerm(e.target.value);
        }}
        placeholder={"Search for College or Degree"}
        onKeyDown={e => {
          e.key === "Enter" ? submitTerm() : null;
        }}
      />
      <Submit
        onClick={() => {
          submitTerm();
        }}
      >
        {" "}
        <FontAwesomeIcon
          style={{ color: colors.WHITE }}
          icon={["fas", "search"]}
        />{" "}
      </Submit>
    </StyledSearchBar>
  );
};

export default connect()(SearchBar);
