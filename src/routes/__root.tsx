import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { Github } from 'lucide-react'

export const Route = createRootRoute({
  component: () => (
    <>
      <header className='container'>
        <div className="py-3 flex gap-3">
          <Link to="/vietnam_standard_calculator" className=" text-emerald-600 [&.active]:font-bold flex-1 ">
            Vietnam standard calculator
          </Link>
          <Link to="/vietnam_standard_calculator/data" className="[&.active]:font-bold">
            About data
          </Link>
          <Link to='/vietnam_standard_calculator/qna' className='[&.active]:font-bold border-s ps-3'>Q&A</Link>
        </div>
      </header>
      <hr />
      <main className='container py-5'>
        <Outlet />
      </main>
      <hr />
      <footer className=' container flex py-3 gap-3 items-center '>
        <p className='flex-1'>@2024 a product of <a href="https://portfolio.phuopham.com">phuopham</a></p>
        <a href="https://github.com/phuopham/vietnam_standard_calculator"><Github /></a>
        <a className='px-3 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-emerald-600 text-primary-foreground hover:bg-emerald-600/90'
          href="https://portfolio.phuopham.com">phuopham</a>
      </footer>
    </>
  ),
})
