import React from 'react'
import figma from '../image/figma.svg'
type Props = {}

const IconFigma = (props: Props) => {
    return (
        <div className='skill'>
            <img src={figma} alt="" />
            <p>figma</p>
        </div>
    )
}

export default IconFigma