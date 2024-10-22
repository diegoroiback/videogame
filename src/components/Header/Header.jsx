import Nav from "@/components/Nav/Nav";
import Logo from "@/components/Logo/Logo";
import classes from '@/styles/components/Header.module.scss'

export default function Header () {
  return (
    <header className={classes.header}>
      <div className={classes.header__container}>
        <Logo />
        <Nav />
      </div>
    </header>
  )
}
