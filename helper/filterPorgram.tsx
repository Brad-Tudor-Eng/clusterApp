import {FILTEROPT} from '../actions/types'

const filterProgram = (program, filterOpt=FILTEROPT.BACHLORES) => program.degreeType.toLowerCase() === filterOpt.toLocaleLowerCase()

export default filterProgram