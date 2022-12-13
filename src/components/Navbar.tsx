import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { LogoIcon, MenuCloseIcon, MenuIcon } from './Icons'

export const Navbbar = () => {
  const { asPath } = useRouter()
  const [navMenu, setNavMenu] = useState(false)
  const handleNavMenu = () => {
    setNavMenu(prev => !prev)
  }
  const menuItems = [
    { id: 1, spanLabel: '00', label: 'Home', navUrl: '/' },
    { id: 2, spanLabel: '01', label: 'Destination', navUrl: '/destination' },
    { id: 3, spanLabel: '02', label: 'Crew', navUrl: '/crew' },
    { id: 4, spanLabel: '03', label: 'Technology', navUrl: '/technology' }
  ]

  return (
    <header className='fixed z-10 flex items-center justify-between w-screen p-6 bg-white/5 md:bg-transparent md:pl-6 lg:pl-14 lg:pt-10 md:p-0'>
      <LogoIcon />
      {navMenu ? (
        <button className='z-10 block md:hidden' onClick={handleNavMenu}>
          <MenuCloseIcon />
        </button>
      ) : (
        <button className='z-10 block md:hidden' onClick={handleNavMenu}>
          <MenuIcon />
        </button>
      )}
      {/* MOBILE */}
      <nav
        className={
          navMenu
            ? 'fixed top-0 right-0 bg-white/5 w-3/4 h-screen transition-all duration-300 flex items-start justify-center pt-32 backdrop-blur-3xl border border-white/10 shadow-sm'
            : 'fixed top-0 -right-[100%] bg-white/5 w-3/4 h-screen transition-all duration-300 backdrop-blur-md flex items-start justify-center pt-32 border border-white/10 shadow-sm'
        }>
        <ul
          className='flex flex-col gap-8 text-white uppercase font-barlowCond'>
          {menuItems.map(({ id, spanLabel, label, navUrl }) => (
            <li key={id} className='tracking-[2.7px]'>
              <Link href={navUrl} onClick={handleNavMenu}>
                <span className={asPath === navUrl ? 'border-b-2 pb-2' : ''}>
                  <span className='mr-3 font-bold'>{spanLabel}</span>
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* DESKTOP */}
      <nav className='relative w-[65%] lg:w-full max-w-[830px] h-24 bg-white/5 self-stretch md:flex items-center justify-center backdrop-blur-3xl hidden'>
        <div className='absolute w-[57%] xl2:w-full h-[1px] bg-white/25 -left-[53%] xl2:-left-[97%] hidden lg:block'></div>
        <ul className='flex gap-[50px] text-white uppercase font-barlowCond'>
          {menuItems.map(({ id, spanLabel, label, navUrl }) => (
            <li key={id} className='tracking-[2.7px]'>
              <Link href={navUrl}>
                <span className={asPath === navUrl ? 'border-b-2 pb-9' : ''}>
                  <span className='hidden mr-3 font-bold lg:inline-flex '>
                    {spanLabel}
                  </span>
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
