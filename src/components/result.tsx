import { POPULATION } from "@/constants/others"

export const Result = ({ percentage }: { percentage: number }) => {
    return (
        <div className='col-span-2 flex flex-col items-center justify-center px-5 '>
            Kết quả
            <div className='border rounded-xl bg-slate-100 p-5'>
                {percentage}% dân số phù hợp với mong muốn của bạn. Bạn cần làm quen với tối thiểu {Math.round(1 / percentage).toLocaleString('vi')} người để tìm được đối tượng.
                Năm 2024, dân số nước ta là {POPULATION.toLocaleString('vi')}. Bạn có thể tìm được {Math.round((POPULATION * percentage)).toLocaleString('vi')} đối tượng
            </div>
        </div>
    )
}