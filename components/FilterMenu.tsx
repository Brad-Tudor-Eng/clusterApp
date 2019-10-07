import styled from 'styled-components'
import {colors} from '../helper/Constants'
import {connect, useDispatch} from 'react-redux'
import {filter} from '../actions'
import {FILTEROPT} from '../actions/types'

const StyledFilterMenu = styled.div`
    display: flex;
    height: 2rem;
    align-items: center;

    p{
        padding: 0rem .25rem;
        font-size: 1rem;
    }

    button{
        font-size: 1rem;
        outline: none;
        border: none;
    }

    button:hover{
        color: ${colors.ORANGE}
        cursor: pointer 
    }
`

const FilterMenu = () => {
    const dispatch = useDispatch()

    return (
        <StyledFilterMenu>
            <p>Filter By: </p>
            <button onClick={()=>{filter(dispatch, FILTEROPT.CERTIFICATE)}}>Certificate</button>
            <p>|</p>
            <button onClick={()=>{filter(dispatch, FILTEROPT.ASSOCIATES)}} >Associate's</button>
            <p>|</p>
            <button onClick={()=>{filter(dispatch, FILTEROPT.BACHLORES)}} >Bachelor's</button>
        </StyledFilterMenu>
    )
}

export default connect()(FilterMenu)