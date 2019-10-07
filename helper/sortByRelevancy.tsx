import scoreRelevency from './scoreRelevency'

const sortByRelevancy = (programs, term) => {
    return programs.sort( (a, b) => scoreRelevency(a, term)-scoreRelevency(b, term) )
}

export default sortByRelevancy