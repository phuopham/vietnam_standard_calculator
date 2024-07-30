/// <reference types="vite-plugin-svgr/client" />
import { POPULATION } from "@/constants/others"
import { GenderType } from "./pages/main"
import Male from '@/assets/male.svg?react'
import Female from '@/assets/female.svg?react'
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export const Model = ({ key, gender, percentage }: { key: number, gender: GenderType, percentage: number }) => {
    console.log(key)
    return gender == 'male' ?
        (
            <Male className={cn('mx-[20%] h-7 w-3', percentage >= key ? "" : "bg-emerald-500")} key={key} />
        ) : (
            <Female className={cn('-mx-[20%] h-7 w-6', percentage >= key ? "" : "bg-emerald-500")} key={key} />
        )
}
export const Result = ({ gender, percentage }: { gender: GenderType, percentage: number }) => {
    const [modelArray, setModelArray] = useState<number[]>([0, 1])
    // useEffect(() => {
    //     setModelArray(Array.from({ length: 1000 }, (_, i) => {
    //         return (i)
    //     }))
    // }, [])
    console.log(modelArray)
    return (
        <div className='col-span-2 flex flex-col items-center justify-center px-5 '>
            Kết quả
            <div className='border rounded-xl bg-slate-100 p-5'>
                {percentage}% dân số phù hợp với mong muốn của bạn. Trung bình, Một trong số {Math.round(1 / percentage).toLocaleString('vi')} người xung quanh bạn đạt tiêu chuẩn.
                Năm 2024, dân số nước ta là {POPULATION.toLocaleString('vi')}. Bạn có thể tìm được {Math.round((POPULATION * percentage)).toLocaleString('vi')} đối tượng
            </div>
            <div className="grid grid-cols-50">
                {modelArray.map((_, i) =>
                    <Model key={i} gender={gender} percentage={0} />
                )
                }
            </div>
        </div>


    )
}