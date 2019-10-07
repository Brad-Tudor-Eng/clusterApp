import fs from 'fs'

class Program {
  college:string
  degree:string
  degreeType:string
  delivery:string
  annualTuition:number


  constructor(college, degree, degreeType, delivery, annualTuition) {
    this.college = college;
    this.degree = degree;
    this.degreeType = degreeType;
    this.delivery = delivery;
    this.annualTuition = annualTuition;
  }
}

const processCSV = fileName => {
  let x = fs
    .readFileSync(fileName)
    .toString()
    .split("\n");

  return x.map(el => el.replace("\r", ""));
};

const degreeType:string[] = ["Associates", "Bachlores", "Certificate"];

const deliveryType:string[] = ["100% online", "75% online", "50% online"];

const generateTuition = () => 1000 + Math.random() * 1000;

const colleges:string[] = processCSV("./Colleges.csv");
const degrees:string[] = processCSV("./Programs.csv");

const generateIndex:(max:number)=>number = max => Math.floor(Math.random() * max);

// college, degree, degreeType, delivery, annualTuition

const generateProgram = () => {
  let cI:number = generateIndex(colleges.length);
  let degI:number = generateIndex(degrees.length);
  let degTyI:number = generateIndex(degreeType.length);
  let delI:number = generateIndex(deliveryType.length);
  let aT:number = parseFloat(generateTuition().toFixed(2));

  return new Program(
    colleges[cI],
    degrees[degI],
    degreeType[degTyI],
    deliveryType[delI],
    aT
  );
};

const data:Program[] = [];

let length:number = 1000;

for (let i = 0; i < length; i++) {
  data.push(generateProgram());
}

const jsonData:string = JSON.stringify(data);

fs.writeFileSync("./Programs.json", jsonData);
