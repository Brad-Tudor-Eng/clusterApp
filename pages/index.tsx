import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import { connect, useDispatch } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProgramItem from "../components/ProgramItem";

import { setDisplayTotal } from "../actions";
//figure out height of element.

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2rem;
  height: 50rem;

  h2 {
    font-size: 2rem;
    margin: 1rem 0;
    padding: 0;
    line-height: 2rem;
    font-weight: 400;
  }
`;

const ProgramsContainer = styled.div`
  max-height: 90vh;
  overflow: hidden;
  auto-scroll: none;
`;

const Home = ({ currentPrograms, searchTerm, currentIndex, displayTotal }) => {
  const dispatch = useDispatch();

  const [outerDimensions, setOuterDimensions] = useState();
  const [itemHeight, setItemHeight] = useState();

  const outer = useRef(null);

  useEffect(() => {
    setOuterDimensions(outer.current.clientHeight);
    if (outerDimensions && itemHeight) {
      let newDisplayTotal = Math.max(
        Math.floor(outerDimensions / itemHeight),
        3
      );
      setDisplayTotal(dispatch, newDisplayTotal);
    }
  }, [outer, itemHeight]);

  const renderPrograms = () => {
    const startIndex = Math.min(
      currentIndex * displayTotal,
      currentPrograms.length - displayTotal + 1
    );
    const endIndex = Math.min(
      startIndex + displayTotal - 1,
      currentPrograms.length
    );
    return currentPrograms
      .slice(startIndex, endIndex)
      .map(program => (
        <ProgramItem
          key={`${program.degree}${program.degreeType}${program.annualTuition}`}
          program={program}
          setItemHeight={setItemHeight}
        />
      ));
  };

  const renderResult = () => {
    return searchTerm !== "" ? (
      <h2>
        {currentPrograms.length} online programs for "{searchTerm}"
      </h2>
    ) : (
      <h2>{currentPrograms.length} online programs </h2>
    );
  };

  return (
    <Outer>
      <Header />
      {renderResult()}
      <ProgramsContainer ref={outer}>{renderPrograms()}</ProgramsContainer>
      <Footer />
    </Outer>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Home);
