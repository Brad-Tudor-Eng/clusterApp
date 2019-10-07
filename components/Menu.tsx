import styled from 'styled-components'
import {colors} from '../helper/Constants'

const StyledMenu = styled.div`

    display: flex;
    justify-self: flex-end;
    margin-left: auto;
    align-items: center;

    button{
        align-items: center;
        font-size: 1rem;
        outline: none;
        border: none;
    }

    p{
        margin-left: 2px;
        margin-right: 2px;
    }
`

const Menu = () => {
    return (
        <StyledMenu>
            <button>Sign In</button>
            <p>|</p>
            <button>More </button>
        </StyledMenu>
    )
}

export default Menu