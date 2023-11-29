import React from 'react'
import git from '../image/git.svg'
type Props = {}

const IconGit = (props: Props) => {
    return (
        <div className='skill'>
            <img src={git} alt="" />
            <p>git</p>
        </div>
    )
}

export default IconGit