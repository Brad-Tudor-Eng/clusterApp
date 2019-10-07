import deepCopy from "./deepCopy";
import filterProgram from "./filterPorgram";
import sortPrograms from "./sortPrograms";
import Program from "../models/Program";
import { FILTEROPT } from "../actions/types";

const searchAndFilter = (state, filter: FILTEROPT, term: string) => {
  const newAllPrograms = deepCopy(state.allPrograms);
  const currentPrograms = newAllPrograms.filter(program => {
    let values = Object.values(program);
    //search each value of the program for the search term
    for (let value of values) {
      if (typeof value === "string") {
        let lowerCaseValue: string = value.toLocaleLowerCase();
        //if it contains the search term
        if (lowerCaseValue.includes(term)) {
          //if it also meets the filter criteria
          if (filterProgram(program, filter || state.filter)) {
            return true;
          }
        }
      }
    }
    return false;
  });
  const sortedPrograms: Program[] = sortPrograms(
    currentPrograms,
    state.sortBy,
    term
  );
  const newState = deepCopy(state);
  newState.searchTerm = term;
  newState.currentPrograms = sortedPrograms;
  return newState;
};

export default searchAndFilter;
