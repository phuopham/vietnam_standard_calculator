import { GenderType, OthersType } from "@/components/pages/main";
import { AGE_DISTRIBUTION } from "@/constants/ageDistribution";
import { HEIGHT_DISTRIBUTION } from "@/constants/heightDistribution";
import { INCOME_DISTRIBUTION, URBAN_PERCENTAGE } from "@/constants/incomeDistribution";
import { MARITAL_STATUS } from "@/constants/marriageDistribution";
import { ALCOHOLIC_RATE, DISABILITY, ORPHANS, SMOKING_RATE } from "@/constants/others";

type MaritalDataType = {
    currentlyMarried: number,
    single: number,
    widowed: number,
    divorced: number,
    separated: number
}

export const matchedAge: (gender: GenderType, ages: number[]) => number = (gender, ages) => {
    const result: number = AGE_DISTRIBUTION.filter((value) => value.under <= ages[1] && value.under > ages[0]).reduce((total, item) => total + item[gender], 0)
    return result
}

export const matchedHeight: (gender: GenderType, height: number[]) => number = (gender, height) => {
    const result: number = HEIGHT_DISTRIBUTION.filter((item) => item.height <= height[1] && item.height > height[0]).reduce((total, item) => total + item[gender], 0)
    return result
}

export const matchedIncome: (income: number[]) => number = (income) => {
    const result: number = INCOME_DISTRIBUTION.filter((item) => item.income > income[0] && item.income <= income[1]).reduce((total, item) => total + item.urban * URBAN_PERCENTAGE + item.rural * (1 - URBAN_PERCENTAGE), 0)
    return result
}

export const matchedMaritalStatus = (status: OthersType, maritalStatus: MaritalDataType) => {
    let total = 0
    for (const key in status) {
        if (status[key as keyof typeof status])
            if (maritalStatus[key as keyof typeof maritalStatus])
                total += maritalStatus[key as keyof typeof maritalStatus]
    }
    return total;
}

export const finalResult: (gender: GenderType, ages: number[], height: number[], income: number[], others: OthersType) => number = (gender, ages, height, income, others) => {
    const antiAlcoholicRate = (100 - ALCOHOLIC_RATE[gender]) / 100
    const nonSmokingRate = (100 - SMOKING_RATE[gender]) / 100
    const result = matchedAge(gender, ages) / 100 *
        matchedHeight(gender, height) / 100 *
        matchedIncome(income) / 100 *
        matchedMaritalStatus(others, MARITAL_STATUS) / 100 *
        (others.disability ? DISABILITY : 1) *
        (others.orphans ? ORPHANS : 1) *
        (others.antiAlcoholic ? antiAlcoholicRate : 1) *
        (others.nonSmoking ? nonSmokingRate : 1)

    return result
}