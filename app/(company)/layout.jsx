import NavLink from '@/components/ui/NavLink'

const CompanyLayout = ({ children }) => {
  return (
    <section className='py-24'>
      <div className='container flex'>
        <div className='overflow-y-auto border-r border-gray-200 py-6 pr-12'>
          <nav className='flex flex-col'>
            <ul role='list' className='flex flex-1 flex-col gap-y-4'>
              <li>
                <NavLink href='/about'>About</NavLink>
              </li>
              <li>
                <NavLink href='/team'>Team</NavLink>
              </li>
              <li>
                <NavLink href='/contact'>Contact</NavLink>
              </li>
              <li>
                <NavLink href='/join'>Join</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <main className='grow ml-12 p-6 bg-gray-50'>{children}</main>
      </div>
    </section>
  )
}

export default CompanyLayout
