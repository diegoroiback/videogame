import classes from '@/styles/components/Logo.module.scss'
import { PiGameControllerFill } from "react-icons/pi";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <PiGameControllerFill />
      <p className="header__logo-text"><strong>Videogames</strong> By Diego Zapata</p>
    </div>
  )
}

export default Logo
