import { useState } from 'react'
import { IoArrowForward } from "react-icons/io5";
import classes from '@/styles/components/Highlights.module.scss'

const ItemHighlights = ({ isActive, img, title, linkTxt, linkUrl }) => {
  const [hoverStarted, setHoverStarted] = useState(isActive)

  return (
    <div
      onMouseEnter={() => setHoverStarted(true)}
      onMouseLeave={() => setHoverStarted(false)}
      className={`${classes.highlights__item} ${hoverStarted && classes['highlights__item--active']}`}>
      <div className={classes.highlights__image}>
        <img src={img} alt="" className={classes.highlights__img} />
      </div>
      <div className={classes.highlights__caption}>
        <p className={classes.highlights__name}>{title}</p>
        <a href={linkUrl} className={classes.highlights__link}>{linkTxt} <IoArrowForward /></a>
      </div>
    </div>
  )
}

export default ItemHighlights
