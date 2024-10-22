import { useState } from 'react'
import classes from '@/styles/components/Highlights.module.scss'
import ItemHighlights from './ItemHighlights'

export default function Highlights () {
  const [hoverActive, setHoverActive] = useState(true)

  return (
    <div className={classes.highlights}>
      <div className={classes.highlights__container}>
        <h1 className={classes.highlights__title}>Videojuegos WIKI</h1>
        <div
          onMouseEnter={() => setHoverActive(false)}
          onMouseLeave={() => setHoverActive(true)}
          className={`${classes.highlights__list} ${hoverActive && classes['highlights__list--active']}`}>
          <ItemHighlights isActive={true} img='https://cdnb.artstation.com/p/assets/images/images/048/273/227/4k/suke-fanart-final-410.jpg?1649650938' title='Games' linkTxt='See more' linkUrl />
          <ItemHighlights img='https://cdn.prod.website-files.com/5f6c71314a8db82b6218d0ea/66fa827d6a60bf74cd302d7f_65a63a3b226cd3376a7e798d_console%2520gaming%2520platforms_result_result.webp'
            title='Platforms' linkTxt='See more' linkUrl />
          <ItemHighlights img='https://media.gq.com.mx/photos/60b3a9faee4372271f0b97e9/16:9/w_2560%2Cc_limit/e3.jpg'
            title='Publishers' linkTxt='See more' linkUrl />
        </div>
      </div>
    </div>
  )
}
