import styled from "styled-components";
import { colors } from "../helper/Constants";
import { useEffect, useRef } from "react";

const StyledProgramItem = styled.div`
    font-family: 'Open Sans', sans-serif;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid ${colors.LIGHT_GREY}
    margin-bottom: .5rem;
`;

const Icon = styled.div`
  display: inline-block;
  width: 4rem;
  height: 4rem;
  border-color: ${colors.DARK_GREY}
  border-width: 1px;
  border-radius: .25rem;
  background-color: black;
  margin-right: .5rem;
  margin-bottom: .5rem;
`;

const Spacer = styled.div`
  display: flex;
  margin-left: auto;
`;
const IconContainer = styled.div`
  display: flex;

`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    line-height: 2rem;
  }

  p {
    font-size: 1.25rem;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1rem;
  width: 7rem;
  min-width: max-content;

  p {
    margin: 1px;
  }
`;

const ProgramItem = ({ program, setItemHeight }) => {
  const { college, degree, degreeType, delivery, annualTuition } = program;

  let progItem = useRef(null);

  useEffect(() => {
    setItemHeight(progItem.current.clientHeight);
  }, [progItem]);

  return (
    <StyledProgramItem ref={progItem}>
      <IconContainer>
        <Icon />
        <TitleContainer>
          <h3>{degree}</h3>
          <p>{college}</p>
        </TitleContainer>
      </IconContainer>
      <Spacer>
        <Container>
          <p>Degree Type</p>
          <p>{degreeType}</p>
        </Container>
        <Container>
          <p>Delivery</p>
          <p>{delivery}</p>
        </Container>
        <Container>
          <p>Annual Tuition</p>
          <p>${annualTuition}</p>
        </Container>
      </Spacer>
    </StyledProgramItem>
  );
};

export default ProgramItem;
