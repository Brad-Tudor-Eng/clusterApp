
import {useState} from 'react'
import styled from 'styled-components'
import {colors} from '../helper/Constants'
import {connect, useDispatch} from 'react-redux'
import {search} from '../actions'


const StyledSearchBar = styled.div`
    display: flex;
    align-items: center;
    padding-left: 2rem;
    height: 1.5rem;
`

const Input = styled.input`
    width: 20rem;
    min-width: 10rem;
    height: 80%;
    outline: none;
`

const Submit = styled.button`
    height: 100%;
    background-color: ${colors.ORANGE}
`

const SearchBar = () => {
    
    const [searchTerm, setSearchTerm] = useState("")
    const dispatch = useDispatch()

    const submitTerm = () => {
        if(searchTerm !== ""){
            search(dispatch, searchTerm)
        }
    }

    return (
        <StyledSearchBar>
            <Input 
                value={searchTerm}
                onChange={(e)=>{ setSearchTerm(e.target.value)}}
                placeholder={'Search for College or Degree'}
                onKeyDown={(e)=>{e.key === "Enter" ? submitTerm() : null}}
            />
            <Submit onClick={()=>{submitTerm()}}>
            </Submit>
        </StyledSearchBar>
    )
}

export default connect()(SearchBar)