import vercel from '../image/vercel.svg'
type Props = {}

const IconVercel = ({}: Props) => {
  return (
    <div className='skill'>
            <img src={vercel} alt="" />
            <p>Vercel</p>
        </div>
  )
}

export default IconVercel