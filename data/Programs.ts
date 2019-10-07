import Program from '../models/Program'
import js from '../data/Programs.json'

const programs = []

for(let pg of js){
    let { college, degree, degreeType, delivery, annualTuition} = pg
    let newProgram = new Program(college, degree, degreeType, delivery, annualTuition)
    programs.push(newProgram)
}

export default programs
