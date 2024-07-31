import { Link } from '@tanstack/react-router'

export const QnAPage = () => {
    return (
        <body>
            <h1 className="pt-3 text-2xl font-bold">Các câu hỏi thường gặp</h1>
            <div className="sm:grid sm:grid-cols-3 gap-6">
                <section className=" col-span-2">
                    <h3 className='font-bold pt-3 text-emerald-600' id="question1">Vietnam standard calculator là gì?</h3>
                    <p className='px-3'>Vietnam standard calculator là công cụ tính toán khả năng bạn tìm được đối tượng mong muốn trong phạm vi nước Cộng hòa Xã hội Chủ nghĩa Việt Nam</p>
                    <h3 className='font-bold pt-3 text-emerald-600' id="question2">Công cụ này có chính xác không?</h3>
                    <p className='px-3'>Công cụ này không chính xác 100% nhưng đạt độ chính xác cao do sử dụng phương pháp tính xác suất thống kê và dữ liệu có thể tin cậy từ nhiều nguồn khác nhau.</p>
                    <h3 className='font-bold pt-3 text-emerald-600' id="question3">Thông tin từ công cụ này có từ đâu?</h3>
                    <p className='px-3'>Mọi dữ liệu dùng cho công cụ này được tôi tổng hợp <Link className='underline' to='/vietnam_standard_calculator/data'>tại đây</Link></p>
                    <h3 className='font-bold pt-3 text-emerald-600' id="question4">Tôi có cần đăng kí để sử dụng công cụ này?</h3>
                    <p className='px-3'>Không. Công cụ này là miễn phí cho mọi người</p>
                    <h3 className='font-bold pt-3 text-emerald-600' id="question5">Công cụ này có lưu trữ thông tin cá nhân của tôi không?</h3>
                    <p className='px-3'>Không. Tôi cam kết không thu thập, lưu trữ dữ liệu cá nhân cũng như lịch sử tìm kiếm của bạn.</p>
                    <h3 className='font-bold pt-3 text-emerald-600' id="question6">Có những cách nào để hỗ trợ tác giả?</h3>
                    <p className='px-3'>Bạn có thể contribute cho dự án mở này trên github hoặc email trực tiếp cho tác giả</p>
                </section>
                {/* <section>
                    <ul>
                        <li className=' list-disc'><a href="#question">Vietnam standard calculator là gì?</a></li>
                        <li className=' list-disc'><a href="#question">Công cụ này có chính xác không?</a></li>
                        <li className=' list-disc'><a href="#question">Thông tin từ công cụ này có từ đâu?</a></li>
                        <li className=' list-disc'><a href="#question">Tôi có cần đăng kí để sử dụng công cụ này?</a></li>
                        <li className=' list-disc'><a href="#question">Công cụ này có lưu trữ thông tin cá nhân của tôi không?</a></li>
                    </ul>
                </section> */}
            </div>
        </body >

    )
}