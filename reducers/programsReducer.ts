import Program from '../models/Program'
import programs from '../data/Programs'
import filterProgram from '../helper/filterPorgram'
import searchAndFilter from '../helper/searchAndFilter'
import deepCopy from '../helper/deepCopy'
import sortPrograms from '../helper/sortPrograms'


import {SORTBY, FILTER, SEARCH, SORTBYOPT, FILTEROPT, NEXT, PREVIOUS} from '../actions/types'


const INITIAL_STATE:{   allPrograms:Program[], 
                        currentPrograms:Program[],
                        currentIndex:number,
                        searchTerm:string,
                        sortBy:SORTBYOPT, 
                        filter:FILTEROPT } = {
    allPrograms: [...programs],
    currentPrograms: programs.filter(program => filterProgram(program)),
    currentIndex: 0,
    searchTerm:"",
    sortBy:SORTBYOPT.RELEVANCY,
    filter:FILTEROPT.BACHLORES
}


export default  (state=INITIAL_STATE, {type, payload}) => {
    switch(type){
        case SEARCH: {
            const searchTerm = payload
            return searchAndFilter(state, null, searchTerm)
        }
        case FILTER: {
            const newState = searchAndFilter(state, payload, state.searchTerm)
            newState.filter = payload
            return newState
        }
        case SORTBY: {
            const sortByOption = payload
            const currentPrograms = deepCopy(state.currentPrograms)
            const sorted = sortPrograms(currentPrograms, payload, sortByOption)
            const newState = deepCopy(state)
            newState.currentPrograms = sorted
            newState.sortBy = sortByOption
            return newState
        }
        case NEXT: {
            return state
        }
        case PREVIOUS: {
            return state
        }
        default: {
            return state
        }
    }
}