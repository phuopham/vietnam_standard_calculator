import { useState } from 'react'
import { AgeForm } from "../age_form"
import { HeightForm } from "../height_form"
import { IncomeForm } from "../income_form"
import { GenderForm } from '../gender_form'

export type GenderType = "male" | "female"

export const Main = () => {
    const [ages, setAges] = useState<number[]>([20, 60])
    const [gender, setGender] = useState<GenderType>("male")
    const [height, setHeight] = useState<number[]>([135, 210])
    const [income, setIncome] = useState<number[]>([0, 100])
    return (
        <div className="p-2">
            <div>
                {/* main content */}
                <GenderForm gender={gender} setGender={(val: GenderType) => setGender(val)} />
                <AgeForm gender={gender} ages={ages} onValueChange={(val) => setAges(val)} />
                <HeightForm gender={gender} height={height} onValueChange={(val) => setHeight(val)} />
                <IncomeForm income={income} onValueChange={(val) => setIncome(val)} />
            </div>
        </div>
    )
}