import Program from '../models/Program'

const compareStrings:(stringA:string, stringB:string)=>number = (stringA:string, stringB:string) => {
    const globalMap:{[key: string]: number} = {}
    let total = 0
    
    for(let letter of stringA){
        globalMap[letter] = globalMap[letter] ? globalMap[letter] + 1 : 1
    }

    for(let letter of stringB){
        globalMap[letter] = globalMap[letter] ? globalMap[letter] - 1 : -1
    }

    for(let value of Object.values(globalMap)){
        total += Math.abs(value)
    }

    return total
}

const scoreRelevency:(program:Program, term:string)=>number = (program,term) => {
    const { college, degree, delivery} = program
        const collegeScore = compareStrings(college, term)
        const degreeScore = compareStrings(degree, term)
        const deliveryScore = compareStrings(delivery, term)
        const score = collegeScore + deliveryScore + degreeScore
    return score
}

export default scoreRelevency