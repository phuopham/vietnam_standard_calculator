import { useState } from 'react'
import { AgeForm } from "../age_form"
import { HeightForm } from "../height_form"
import { IncomeForm } from "../income_form"
import { GenderForm } from '../gender_form'
import { OtherForm } from '../others_form'
import { finalResult } from '@/utils/standardpercentage'
import { Result } from '../result'
import { Other2Form } from '../other2_form'

export type GenderType = "male" | "female"
export type OthersType = {
    currentlyMarried: boolean,
    single: boolean,
    widowed: boolean,
    divorced: boolean,
    separated: boolean,
    disability?: boolean,
    orphans?: boolean,
    alcoholic?: boolean
    smoking?: boolean
}

export const MainPage = () => {
    const [ages, setAges] = useState<number[]>([20, 60])
    const [gender, setGender] = useState<GenderType>("male")
    const [height, setHeight] = useState<number[]>([135, 210])
    const [income, setIncome] = useState<number[]>([0, 50])
    const [others, setOthers] = useState<OthersType>({ currentlyMarried: false, single: true, widowed: false, divorced: false, separated: false })
    const percentage = finalResult(gender, ages, height, income, others)
    return (
        <>
            <div className=" md:grid lg:grid-cols-3 md:grid-cols-2">
                <div className=' p-3 space-y-5 rounded-xl border '>
                    {/* main content */}
                    <GenderForm gender={gender} setGender={(val: GenderType) => setGender(val)} />
                    <AgeForm gender={gender} ages={ages} onValueChange={(val) => setAges(val)} />
                    <HeightForm gender={gender} height={height} onValueChange={(val) => setHeight(val)} />
                    <IncomeForm income={income} onValueChange={(val) => setIncome(val)} />
                    <OtherForm data={others} onValueChange={(val) => setOthers(val)} />
                    <Other2Form data={others} onValueChange={(val) => setOthers(val)} />
                </div>
                <Result percentage={percentage} gender={gender} />

            </div>
        </>
    )
}