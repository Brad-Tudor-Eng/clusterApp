import styled from 'styled-components'
import {colors} from '../helper/Constants'
import {connect} from 'react-redux'
import {useDispatch} from 'react-redux'
import {previous, next, goToIndex} from '../actions'

const StyledFooter = styled.footer`
    margin-top: auto;
`
const Button = styled.button`

    background-color: ${colors.WHITE};

    .current{
        color: ${colors.ORANGE};
        background-color: ${colors.ORANGE};
    }
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

const Footer = ({currentCount, currentIndex, displayTotal}) => {

    const dispatch = useDispatch()

    const renderButtons = () =>{
        const totalPages = Math.ceil(currentCount / displayTotal)

        const buttons = []

        const numberOfButtons = currentIndex + 3 > totalPages ? totalPages - currentIndex : 3
        
        for(let i = Math.min(currentIndex+1, totalPages-3); i <= Math.min(currentIndex+numberOfButtons, totalPages-1); i++ ){ buttons.push(i) }
        
        buttons[buttons.length-1] === totalPages -1 ? null : buttons.push(null)
        
        buttons.push(totalPages)
        
        console.log(currentIndex+1)
        
        return buttons.map( (pageNumber, i) => pageNumber ? <Button key={`${pageNumber}${i}`} className={pageNumber === (currentIndex+1) ? "current" : null}  onClick={()=>{ goToIndex(dispatch, pageNumber) }} >{pageNumber}</Button> : <Spacer /> )
    }

    return (
        <StyledFooter>
            <ButtonContainer>
                <Button onClick={()=>{previous(dispatch)}}>Previous</Button>
                    {renderButtons()}
                <Button onClick={()=>{next(dispatch)}}>Next</Button>
            </ButtonContainer>
        </StyledFooter>
    )
}

const mapStateToProps = (state) => {
    return {
        currentCount: state.currentPrograms.length,
        currentIndex: state.currentIndex, 
        displayTotal: state.displayTotal
    }
}


export default connect(mapStateToProps)(Footer)