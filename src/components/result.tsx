/// <reference types="vite-plugin-svgr/client" />
import { Link } from '@tanstack/react-router'
import { POPULATION } from "@/constants/others"
import { GenderType } from "./pages/main"
import Male from '@/assets/male.svg?react'
import Female from '@/assets/female.svg?react'

export const Model = ({ id, gender, percentage }: { id: number, gender: GenderType, percentage: number }) => {
    const matched = (percentage * 1000) > id
    return gender == 'male' ?
        (
            <Male className='h-6 w-3' key={id} style={{ fill: matched ? '#059669' : '#bbb' }} />
        ) : (
            <Female className='h-6 w-3' key={id} style={{ fill: matched ? '#059669' : '#bbb' }} />
        )
}
export const Result = ({ gender, percentage }: { gender: GenderType, percentage: number }) => {
    return (
        <div className='lg:col-span-2 flex flex-col items-center px-5 '>
            <h2 className="font-semibold">Kết quả</h2>
            <div className='border rounded-xl bg-slate-100 p-5'>
                {percentage}% dân số phù hợp với mong muốn của bạn. Trung bình, Một trong số {Math.round(1 / percentage).toLocaleString('vi')} người xung quanh bạn đạt đủ tiêu chí đề ra.
                Năm 2024, dân số nước ta là {POPULATION.toLocaleString('vi')}. Bạn có thể tìm được {Math.round((POPULATION * percentage)).toLocaleString('vi')} đối tượng
            </div>
            <div className="hidden lg:grid lg:grid-cols-50">
                {Array.from({ length: 1000 }, (_, i) => {
                    return (i)
                }).map((i) =>
                    <Model key={i} id={i} gender={gender} percentage={percentage} />
                )
                }
            </div>
            <div className='flex-1'></div>
            <p className=' text-end text-sm font-light italic text-slate-600'>*Disclaimer: Các thông tin này không chính xác tuyệt đối. Bạn nên cân nhắc kĩ khi sử dụng những thông tin trên. <Link className='underline' to='/data'>(xem thêm)</Link></p>
            <p className=' self-end text-end text-sm font-light italic text-slate-600'>** Có uống rượu, bia trong 30 ngày gần đây. <Link className='underline' to='/data'>(xem thêm)</Link></p>
        </div>


    )
}