import { AGE_DISTRIBUTION } from "@/constants/ageDistribution";
import { HEIGHT_DISTRIBUTION } from "@/constants/heightDistribution";
import { INCOME_DISTRIBUTION } from "@/constants/incomeDistribution";
import { MARITAL_STATUS } from "@/constants/MaritalDistribution"

export const matchedAge: (gender: "male" | "female", from: number | undefined, to: number | undefined) => number = (gender, from, to) => {
    if (!from && !to) return 1
    if (!from) from = 0;
    if (!to) to = 130;
    const result: number = AGE_DISTRIBUTION.filter((value) => value.under <= to && value.under > from).reduce((total, item) => total + item[gender], 0)
    return result
}
//TODO: need to recalculate because male and femail distribution
export const matchedHeight: (gender: "male" | "female", from: number | undefined, to: number | undefined) => number = (gender, from, to) => {
    if (!from && !to) return 1
    if (!from) from = 100;
    if (!to) to = 210;
    const result: number = HEIGHT_DISTRIBUTION.filter((item) => item.height <= to && item.height >= from).reduce((total, item) => total + item[gender], 0)
    return result
}

export const matchedIncome: (from: number | undefined, to: number | undefined) => number = (from, to) => {
    if (!from && !to) return 1
    if (!from) from = 0;
    if (!to) to = 200;
    const result: number = INCOME_DISTRIBUTION.filter((item) => item.urban >= from && item.urban <= to).reduce((total, item) => total + item.urban, 0)
    return result
}

export const finalResult: (matchedIncome: number, matchedHeight: number, matchedAge: number, maritalStatus: keyof typeof MARITAL_STATUS) => number = (matchedIncome, matchedHeight, matchedAge, maritalStatus) => {
    const maritalPercentage = MARITAL_STATUS[maritalStatus]

    return matchedAge * matchedHeight * matchedIncome * maritalPercentage
}