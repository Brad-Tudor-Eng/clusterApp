const fs = require('fs')

class Program {
    constructor(college, degree, degreeType, delivery, annualTuition){
        this.college = college
        this.degree = degree
        this.degreeType = degreeType
        this.delivery = delivery
        this.annualTuition = annualTuition
    }
}

const processCSV = (fileName) => {
    let x = fs.readFileSync(fileName).toString().split('\n')

    return x.map(el => el.replace('\r', ""))
}

const degreeType = [
    'Associates',
    'Bachlores'
]

const deliveryType = [
    '100% online',
    '75% online',
    '50% online',
]

const generateTuition = () => 1000 + Math.random()*1000

const colleges = processCSV('./Colleges.csv')
const degrees = processCSV('./Programs.csv')

const generateIndex = (max) => Math.floor(Math.random() * max)

// college, degree, degreeType, delivery, annualTuition

const generateProgram = () => {
    let cI = generateIndex(colleges.length)
    let degI = generateIndex(degrees.length)
    let degTyI = generateIndex(degreeType.length)
    let delI = generateIndex(deliveryType.length)
    let aT = parseFloat(generateTuition().toFixed(2))

    return new Program(colleges[cI],degrees[degI], degreeType[degTyI], deliveryType[delI], aT )   
}

const data = []

let length = 1000

for(let i = 0; i < length; i++){
    data.push(generateProgram())
}

const jsonData = JSON.stringify(data)

fs.writeFileSync('./Programs.json',jsonData)