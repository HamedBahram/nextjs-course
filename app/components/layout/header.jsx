import NavLink from '@/components/ui/NavLink'
import ThemeButton from '@/components/ui/ThemeButton'

const Header = () => {
  return (
    <header className='p-4'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-6 text-gray-500'>
          <li>
            <NavLink href='/'>Home</NavLink>
          </li>
          <li>
            <NavLink href='/about'>About</NavLink>
          </li>
          <li>
            <NavLink href='/posts'>Blog</NavLink>
          </li>
        </ul>

        <ThemeButton />
      </nav>
    </header>
  )
}

export default Header
