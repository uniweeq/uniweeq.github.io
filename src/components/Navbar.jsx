import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  return (
    <header className="border-b-[0.5px] border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-8 py-3">
        <Link className="text-sm font-medium text-slate-900" to="/">
          Afif Bin Mohammad Taha
        </Link>
        <nav className="flex items-center gap-6 text-xs font-medium text-slate-600">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-slate-900 underline underline-offset-4'
                  : 'text-slate-600 hover:text-slate-900'
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
