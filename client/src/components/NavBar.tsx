import { NavLink } from 'react-router-dom'

function NavBar (): JSX.Element {
  return (
    <nav className='bg-blue-300 py-3 flex justify-center'>
      <ul>
        <li>
          <NavLink to='/' className='font-semibold hover:text-rose-600'>Home</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
