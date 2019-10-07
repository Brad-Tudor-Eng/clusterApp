import styled from 'styled-components'
import {colors} from '../helper/Constants'
import {connect} from 'react-redux'

const StyledFooter = styled.footer`
    margin-top: auto;
`
const Button = styled.button`

`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`
const Spacer = styled.div`
    display: inline-block;
    width: 1rem;
    height: 1rem;
`

const Footer = ({currentCount, currentIndex}) => {

    const renderButtons = () =>{
        const index = Math.ceil(currentCount / 8);
        const number = Math.ceil(currentCount / 8) > 3 ? 3 : Math.ceil(currentCount / 8);
        const buttons = []

        return buttons.map( index => index ? <Button key={index}>{index}</Button> : <Spacer /> )
    }

    return (
        <StyledFooter>
            <ButtonContainer>
                <Button>Previous</Button>
                    {renderButtons()}
                <Button>Next</Button>
            </ButtonContainer>
        </StyledFooter>
    )
}

const mapStateToProps = (state) => {
    return {
        currentCount: state.currentPrograms.length
    }
}


export default connect(mapStateToProps)(Footer)