import { useState } from 'react'
import { AgeForm } from "../age_form"
import { HeightForm } from "../height_form"
import { IncomeForm } from "../income_form"
import { GenderForm } from '../gender_form'
import { OtherForm } from '../others_form'
import { POPULATION } from '@/constants/others'
import { finalResult, matchedAge, matchedHeight, matchedIncome } from '@/utils/standardpercentage'

export type GenderType = "male" | "female"
export type OthersType = { disability?: boolean, orphans?: boolean }

export const Main = () => {
    const [ages, setAges] = useState<number[]>([20, 60])
    const [gender, setGender] = useState<GenderType>("male")
    const [height, setHeight] = useState<number[]>([135, 210])
    const [income, setIncome] = useState<number[]>([0, 100])
    const [others, setOthers] = useState<OthersType>({ disability: false, orphans: false })
    console.log(JSON.stringify(others))
    const percentage = finalResult(matchedIncome(income), matchedHeight(gender, height), matchedAge(gender, ages))
    return (
        <div className="p-2 md:grid md:grid-cols-3">
            <div className='space-y-5'>
                {/* main content */}
                <GenderForm gender={gender} setGender={(val: GenderType) => setGender(val)} />
                <AgeForm gender={gender} ages={ages} onValueChange={(val) => setAges(val)} />
                <HeightForm gender={gender} height={height} onValueChange={(val) => setHeight(val)} />
                <IncomeForm income={income} onValueChange={(val) => setIncome(val)} />
                <OtherForm data={others} onValueChange={(val) => setOthers(val)} />
            </div>
            <div className='col-span-2 flex flex-col items-center justify-center px-5 '>
                Kết quả
                <div className='border rounded-xl bg-slate-100 p-5'>
                    {percentage}% dân số phù hợp với mong muốn của bạn. Bạn cần làm quen với tối thiểu {(1 / percentage).toFixed(0)} người để tìm được đối tượng
                </div>
            </div>
        </div>
    )
}