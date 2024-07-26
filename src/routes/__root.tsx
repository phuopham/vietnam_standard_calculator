import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <header className='container'>
        <div className="p-2 flex gap-2">
          <Link to="/vietnam_standard_calculator" className=" text-emerald-600 [&.active]:font-bold">
            Vietnam standard calculator
          </Link>{' '}
          <Link to="/vietnam_standard_calculator/data" className="[&.active]:font-bold flex-1">
            Data
          </Link>
          <a className='font-semibold' href="https://github.com/phuopham/vietnam_standard_calculator">Github</a>
          <a className='px-3 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-emerald-600 text-primary-foreground hover:bg-emerald-600/90'
            href="https://portfolio.phuopham.com">Contact me</a>
        </div>
      </header>
      <hr />
      <main className='container'>
        <Outlet />
      </main>
    </>
  ),
})
