interface ProgramInterface {
  college: string;
  degree: string;
  degreeType: string;
  delivery: string;
  annualTuition: number;
}

class Program implements ProgramInterface {
  college: string;
  degree: string;
  degreeType: string;
  delivery: string;
  annualTuition: number;

  constructor(college, degree, degreeType, delivery, annualTuition) {
    this.college = college;
    this.degree = degree;
    this.degreeType = degreeType;
    this.delivery = delivery;
    this.annualTuition = annualTuition;
  }
}

export default Program;
