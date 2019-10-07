import styled from "styled-components";
import { colors } from "../helper/Constants";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { previous, next, goToIndex } from "../actions";
import { useState } from "react";

const StyledFooter = styled.footer`
  margin-top: auto;

  .current {
    color: ${colors.ORANGE};
  }
`;
const Button = styled.button`
  background-color: ${colors.WHITE};
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Spacer = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
`;

const Footer = ({ currentCount, currentIndex, displayTotal }) => {
  const [selectedIndex, setSelectedIndex] = useState(currentIndex + 1);

  const dispatch = useDispatch();

  const handleNext = () => {
    const totalPages = Math.ceil(currentCount / displayTotal)
    next(dispatch)
    setSelectedIndex(Math.min(selectedIndex+1, totalPages))
  };

  const handlePrevious = () => {
    previous(dispatch);
    setSelectedIndex(Math.max(currentIndex, 1));
  };

  const handlegoToIndex = (pageNumber) => {
    setSelectedIndex(pageNumber)
    goToIndex(dispatch, pageNumber);
  }

  const renderButtons = () => {
    const totalPages = Math.ceil(currentCount / displayTotal);

    const buttons = [];

    const numberOfButtons =
      currentIndex + 3 > totalPages ? totalPages - currentIndex : 3;

    for (
      let i = Math.min(currentIndex + 1, totalPages - 3);
      i <= Math.min(currentIndex + numberOfButtons, totalPages - 1);
      i++
    ) {
      if (i >= 1) {
        buttons.push(i);
      }
    }

    buttons[buttons.length - 1] === totalPages - 1 ? null : buttons.push(null);

    buttons.push(totalPages);
    return buttons.map((pageNumber, i) =>
      pageNumber ? (
        <Button
          key={i}
          className={pageNumber === selectedIndex ? "current" : null}
          onClick={() => {
            handlegoToIndex(pageNumber)
          }}
        >
          {pageNumber}
        </Button>
      ) : (
        <Spacer />
      )
    );
  };

  return (
    <StyledFooter>
      <ButtonContainer>
        <Button key="previous" onClick={handlePrevious}>
          Previous
        </Button>
        {renderButtons()}
        <Button key="next" onClick={handleNext}>
          Next
        </Button>
      </ButtonContainer>
    </StyledFooter>
  );
};

const mapStateToProps = state => {
  return {
    currentCount: state.currentPrograms.length,
    currentIndex: state.currentIndex,
    displayTotal: state.displayTotal
  };
};

export default connect(mapStateToProps)(Footer);
