import scoreRelevency from "./scoreRelevency";
import Program from "../models/Program";

const sortByRelevancy = (programs: Program[], term: string) => {
  return programs.sort(
    (a, b) => scoreRelevency(a, term) - scoreRelevency(b, term)
  );
};

export default sortByRelevancy;
