/// <reference types="vite-plugin-svgr/client" />
import { POPULATION } from "@/constants/others"
import { GenderType } from "./pages/main"
import Male from '@/assets/male.svg?react'
import Female from '@/assets/female.svg?react'
import { cn } from "@/lib/utils"

export const Model = ({ id, gender, percentage }: { id: number, gender: GenderType, percentage: number }) => {
    console.log(percentage)
    return gender == 'male' ?
        (
            <Male className={cn('h-6 w-3', (percentage * 1000) < id ? "" : "bg-emerald-500")} key={id} />
        ) : (
            <Female className={cn('h-6 w-3', (percentage * 1000) < id ? "" : "bg-emerald-500")} key={id} />
        )
}
export const Result = ({ gender, percentage }: { gender: GenderType, percentage: number }) => {
    return (
        <div className='col-span-2 flex flex-col items-center justify-center px-5 '>
            Kết quả
            <div className='border rounded-xl bg-slate-100 p-5'>
                {percentage}% dân số phù hợp với mong muốn của bạn. Trung bình, Một trong số {Math.round(1 / percentage).toLocaleString('vi')} người xung quanh bạn đạt tiêu chuẩn.
                Năm 2024, dân số nước ta là {POPULATION.toLocaleString('vi')}. Bạn có thể tìm được {Math.round((POPULATION * percentage)).toLocaleString('vi')} đối tượng
            </div>
            <div className="grid grid-cols-50">
                {Array.from({ length: 1000 }, (_, i) => {
                    return (i)
                }).map((i) =>
                    <Model key={i} id={i} gender={gender} percentage={percentage} />
                )
                }
            </div>
        </div>


    )
}