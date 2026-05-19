import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <Link className="text-lg font-semibold text-white" to="/">
          Afif Bin Mohammad Taha
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-white'
                  : 'text-slate-300 hover:text-white'
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
