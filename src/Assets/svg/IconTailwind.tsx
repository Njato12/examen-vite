import React from 'react'
import tailwind from '../image/tailwind.svg'
type Props = {}

const IconTailwind = (props: Props) => {
    return (
        <div className='skill'>
            <img src={tailwind} alt="" />
            <p>tailwind</p>
        </div>
    )
}

export default IconTailwind