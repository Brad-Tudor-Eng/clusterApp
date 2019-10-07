import styled from 'styled-components'
import {colors} from '../helper/Constants'

const StyledProgramItem = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid ${colors.DARK_GREY}
    margin-bottom: .5rem;
`

const Icon = styled.div`

`

const Spacer = styled.div`
    display: flex;
    margin-left: auto;
`
const IconContainer = styled.div`
    display: flex;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;

    h3{
        font-size: 2rem;
        font-weight: bold;
        margin: 0;
        padding: 0;
        line-height: 2rem;
    }

    p{
        font-size: 1.25rem;
        font-weight: bold;
        margin: 0;
        padding: 0;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 1rem;
    width: 6.25rem;

    p{
        margin: 1px;
    }
`

const ProgramItem = ({program}) => {

    const { college, degree, degreeType, delivery, annualTuition } = program

    return (
        <StyledProgramItem>
            <IconContainer>
                <Icon/>
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
    )
}

export default ProgramItem