import sortByRelevancy from './sortByRelevancy'
import {SORTBYOPT} from '../actions/types'

const sortPrograms = (programs, sortBy, term) => {
    switch (sortBy){
        case SORTBYOPT.RELEVANCY: {
            return sortByRelevancy(programs, term)
        }
        case SORTBYOPT.COST_HIGH_TO_LOW: {
            return programs.sort((a,b)=>b.annualTuition - a.annualTuition)
        }
        case SORTBYOPT.COST_LOW_TO_HIGH: {
            return programs.sort((a,b)=>a.annualTuition - b.annualTuition)
        }
        default: return programs
    }
} 

export default sortPrograms