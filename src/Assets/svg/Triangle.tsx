
type Props = {
    className: string
}

const Triangle = ({ className }: Props) => {
    return (
        <div className={className}>
            <svg className="tri" width="83" height="85" viewBox="0 0 83 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M82.5646 58.5306L0.0546183 84.8384L18.5263 0.228756L82.5646 58.5306Z" fill="#3778DB" />
            </svg>


        </div>
    )
}

export default Triangle