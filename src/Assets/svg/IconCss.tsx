import React from 'react'
import css from '../image/css.svg'
type Props = {}

const IconCss = (props: Props) => {
    return (
        <div className='skill'>
            <img src={css} alt="" />
            <p>css3</p>
        </div>
    )
}

export default IconCss