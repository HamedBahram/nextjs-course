import NavLink from '@/components/ui/NavLink'
import ThemeButton from '@/components/ui/ThemeButton'
import UserAvatarButton from '@/components/ui/UserAvatarButton'

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
          <li>
            <NavLink href='/guestbook'>Guestbook</NavLink>
          </li>
        </ul>

        <div className='flex items-center gap-4'>
          <ThemeButton />
          <UserAvatarButton />
        </div>
      </nav>
    </header>
  )
}

export default Header
