import {useState} from 'react'
import styled from 'styled-components'
import {colors} from '../helper/Constants'
import {connect, useDispatch} from 'react-redux'
import {sortBy} from '../actions/index'
import {SORTBYOPT} from '../actions/types'


const StyledSortMenu = styled.div`
    width: 12rem;

    button{
        font-size: 1rem;
        outline: none;
        border: none;
        cursor: pointer
    }

    button:hover{
        color: ${colors.ORANGE}
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: start;
        position: absolute;
        background-color: ${colors.WHITE};
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        
    }

    div button:hover{
        color: ${colors.ORANGE};
        cursor: pointer;
    }

    .hidden{
        display: none;
    }
`

const SortMenu = ({filter}) => {
    const [hidden, setHidden] = useState(true)
    const dispatch = useDispatch()

    return (
        <StyledSortMenu>
            <button onClick={()=>{setHidden(!hidden)}}>Sort By: {filter.split("").map((el,i)=> i===0 ? el.toUpperCase() : el)} </button>
            <div className={hidden ? "hidden" : ""}>
                <button onClick={()=>{sortBy(dispatch, SORTBYOPT.RELEVANCY); setHidden(true) }}>Relevancy</button>
                <button onClick={()=>{sortBy(dispatch, SORTBYOPT.COST_LOW_TO_HIGH); setHidden(true) }} >Cost (Low to High)</button>
                <button onClick={()=>{sortBy(dispatch, SORTBYOPT.COST_HIGH_TO_LOW); setHidden(true) }} >Cost (High to Low)</button>
                <button onClick={()=>{sortBy(dispatch, SORTBYOPT.DISTANCE); setHidden(true) }} >Distance</button>
                <button onClick={()=>{sortBy(dispatch, SORTBYOPT.DURATION); setHidden(true) }} >Duration</button>
            </div>
        </StyledSortMenu>
    )
}

const mapStateToProps = (state) => {
    return {
        filter: state.sortBy
    }
}

export default connect(mapStateToProps)(SortMenu)