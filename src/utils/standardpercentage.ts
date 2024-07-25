import { GenderType } from "@/components/pages/main";
import { AGE_DISTRIBUTION } from "@/constants/ageDistribution";
import { HEIGHT_DISTRIBUTION } from "@/constants/heightDistribution";
import { INCOME_DISTRIBUTION } from "@/constants/incomeDistribution";
import { MARITAL_STATUS } from "@/constants/marriageDistribution";
import { POPULATION } from "@/constants/others";


export const matchedAge: (gender: "male" | "female", ages: number[]) => number = (gender, ages) => {
    const result: number = AGE_DISTRIBUTION.filter((value) => value.under <= ages[1] && value.under > ages[0]).reduce((total, item) => total + item[gender], 0)
    return result
}
//TODO: need to recalculate because male and femail distribution
export const matchedHeight: (gender: "male" | "female", height: number[]) => number = (gender, height) => {
    const result: number = HEIGHT_DISTRIBUTION.filter((item) => item.height <= height[1] && item.height > height[0]).reduce((total, item) => total + item[gender], 0)
    return result
}

export const matchedIncome: (income: number[]) => number = (income) => {
    const result: number = INCOME_DISTRIBUTION.filter((item) => item.urban >= income[0] && item.urban <= income[1]).reduce((total, item) => total + item.urban, 0)
    return result
}

export const finalResult: (matchedIncome: number, matchedHeight: number, matchedAge: number, maritalStatus?: keyof typeof MARITAL_STATUS) => number = (matchedIncome, matchedHeight, matchedAge, maritalStatus) => {
    // const maritalPercentage = MARITAL_STATUS[maritalStatus]
    //TODO: disability, orphan, marital status....
    return matchedAge / 100 * matchedHeight * 2 / 100 * matchedIncome / 100
}