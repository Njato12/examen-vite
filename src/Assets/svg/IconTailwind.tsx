import tailwind from '../image/tailwind.svg'
type Props = {}

const IconTailwind = ({}: Props) => {
    return (
        <div className='skill'>
            <img src={tailwind} alt="" />
            <p>Tailwind</p>
        </div>
    )
}

export default IconTailwind