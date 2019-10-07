import Program from "../models/Program";
import programs from "../data/Programs";
import filterProgram from "../helper/filterPorgram";
import searchAndFilter from "../helper/searchAndFilter";
import deepCopy from "../helper/deepCopy";
import sortPrograms from "../helper/sortPrograms";

import {
  SORTBY,
  FILTER,
  SEARCH,
  SORTBYOPT,
  FILTEROPT,
  NEXT,
  PREVIOUS,
  GO_TO_INDEX,
  SET_DISPLAY_TOTAL
} from "../actions/types";

const INITIAL_STATE: {
  allPrograms: Program[];
  currentPrograms: Program[];
  currentIndex: number;
  displayTotal: number;
  searchTerm: string;
  sortBy: SORTBYOPT;
  filter: FILTEROPT;
} = {
  allPrograms: [...programs],
  currentPrograms: programs.filter(program => filterProgram(program)),
  currentIndex: 0,
  displayTotal: 8,
  searchTerm: "",
  sortBy: SORTBYOPT.RELEVANCY,
  filter: FILTEROPT.BACHLORES
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SEARCH: {
      const searchTerm = payload;
      return searchAndFilter(state, null, searchTerm);
    }
    case FILTER: {
      const newState = searchAndFilter(state, payload, state.searchTerm);
      newState.filter = payload;
      return newState;
    }
    case SORTBY: {
      const sortByOption = payload;
      const currentPrograms = deepCopy(state.currentPrograms);
      const sorted = sortPrograms(currentPrograms, payload, sortByOption);
      const newState = deepCopy(state);
      newState.currentPrograms = sorted;
      newState.sortBy = sortByOption;
      return newState;
    }
    case NEXT: {
      const newState = deepCopy(state);
      let { currentIndex, displayTotal, currentPrograms } = newState;
      currentIndex = Math.min(
        currentIndex + 1,
        Math.ceil(currentPrograms.length / displayTotal)
      );
      newState["currentIndex"] = currentIndex;
      return newState;
    }
    case PREVIOUS: {
      const newState = deepCopy(state);
      let { currentIndex } = newState;
      currentIndex = Math.max(currentIndex - 1, 0);
      newState["currentIndex"] = currentIndex;
      return newState;
    }
    case GO_TO_INDEX: {
      const index = payload;
      const newState = deepCopy(state);
      newState["currentIndex"] = index;
      return newState;
    }
    case SET_DISPLAY_TOTAL: {
      const displayTotal = payload;
      const newState = deepCopy(state);
      newState["displayTotal"] = displayTotal;
      return newState;
    }
    default: {
      return state;
    }
  }
};
