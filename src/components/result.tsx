import { POPULATION } from "@/constants/others"

export const Result = ({ percentage }: { percentage: number }) => {
    return (
        <div className='col-span-2 flex flex-col items-center justify-center px-5 '>
            Kết quả
            <div className='border rounded-xl bg-slate-100 p-5'>
                {percentage}% dân số phù hợp với mong muốn của bạn. Trung bình, Một trong số {Math.round(1 / percentage).toLocaleString('vi')} người xung quanh bạn đạt tiêu chuẩn.
                Năm 2024, dân số nước ta là {POPULATION.toLocaleString('vi')}. Bạn có thể tìm được {Math.round((POPULATION * percentage)).toLocaleString('vi')} đối tượng
            </div>
        </div>
    )
}