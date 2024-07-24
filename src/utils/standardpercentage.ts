import { AGE_DISTRIBUTION } from "@/constants/ageDistribution";
import { HEIGHT_DISTRIBUTION } from "@/constants/heightDistribution";
import { INCOME_DISTRIBUTION } from "@/constants/incomeDistribution";
import { MARITAL_STATUS } from "@/constants/marriageDistribution"

const matchedAge: (gender: "male"|"female", from: number|undefined, to: number|undefined) => number = (gender, from, to) => {
    if(!from && !to) return 1
    if(!from) from = 0;
    if(!to) to = 130;
    const result:number = AGE_DISTRIBUTION.filter((value)=> value.under<=to && value.under>from).reduce((total, item)=> total + item[gender], 0)
    return result
}

const matchedHeight: (gender: "male"|"female", from: number|undefined, to: number|undefined) => number = (gender, from, to) => {
    if(!from && !to) return 1
    if(!from) from = 100;
    if(!to) to=210;
    const result:number = HEIGHT_DISTRIBUTION.filter((item)=>item.height<=to && item.height>=from).reduce((total, item)=> total + item[gender], 0)
    return result
}

const matchedIncome: (from: number|undefined, to: number|undefined) => number = (from, to) => {
    if(!from && !to) return 1
    if(!from) from = 0;
    if(!to) to=200;
    const result: number = INCOME_DISTRIBUTION.filter((item)=>item.low>=from && item.high<=to).reduce((total, item)=>total + item.percentage, 0)
    return result
}

const finalResult: (matchedIncome: number, matchedHeight: number, matchedAge: number, maritalStatus: keyof typeof MARITAL_STATUS) => number = (matchedIncome, matchedHeight, matchedAge, maritalStatus) => {
    const maritalPercentage = MARITAL_STATUS[maritalStatus]
    
    return matchedAge * matchedHeight * matchedIncome * maritalPercentage
}