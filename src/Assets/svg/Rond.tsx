import './style/styleIcon.scss'
type Props = {
    className: string
}

const Rond = ({ className }: Props) => {
    return (
        <div className={className}>
            <svg className='sphere' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="#4A8B58" />
            </svg>

        </div>
    )
}

export default Rond