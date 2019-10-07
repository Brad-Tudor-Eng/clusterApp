import React from "react";
import styled from 'styled-components'
import {colors} from '../helper/Constants'


import {connect} from "react-redux";

import Header from '../components/Header'
import Footer from '../components/Footer'
import ProgramItem from '../components/ProgramItem'

//figure out height of element.

const Outer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 2rem;
    height: 50rem;
`

const ProgramsContainer = styled.div`
    max-height: 90vh;
    overflow: hidden;
    auto-scroll: none;
`

const Home = ({currentPrograms, searchTerm, currentIndex, displayTotal}) => {


    const renderPrograms = () => {
        const startIndex = currentIndex+1 || 0
        const endIndex = Math.min(startIndex * displayTotal, currentPrograms.length)
        return currentPrograms.slice(startIndex,endIndex)
                                .map(program => (<ProgramItem key={`${program.degree}${program.degreeType}${program.annualTuition}`}
                                                                program={program} />))
    }

    const renderResult = () => {
        return searchTerm !== ""? <h2>{currentPrograms.length} online programs for {searchTerm}</h2> : null 
    }

    return (
            <Outer>
                <Header />
                    <ProgramsContainer>
                    {renderResult()}
                    {renderPrograms()}
                    </ProgramsContainer> 
                <Footer />
            </Outer>
    )

}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}


export default connect(mapStateToProps)(Home)