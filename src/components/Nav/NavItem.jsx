import classes from '@/styles/components/Nav.module.scss'

const NavItem = ({text, url}) => {
  return (
    <li className="nav__item">
      <a href={url} className={classes.nav__link}>{text}</a>
    </li>
  )
}

export default NavItem
