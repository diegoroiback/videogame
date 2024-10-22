"use client"

import NavItem from './NavItem'
import classes from '@/styles/components/Nav.module.scss'

const Nav = () => {
  return (
    <div className={classes.nav}>
      <nav className={classes.nav__list}>
        <NavItem text='Home' />
        <NavItem text='Games' />
        <NavItem text='Platforms' />
        <NavItem text='Publishers' />
      </nav>
    </div>
  )
}

export default Nav