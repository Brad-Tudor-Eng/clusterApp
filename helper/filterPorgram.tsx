import { FILTEROPT } from "../actions/types";
import Program from '../models/Program'

const filterProgram = (program:Program, filterOpt = FILTEROPT.BACHLORES) =>
  program.degreeType.toLowerCase() === filterOpt.toLocaleLowerCase();

export default filterProgram;