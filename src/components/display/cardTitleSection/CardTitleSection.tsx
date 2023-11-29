import './cardTitleSection.scss'
type Props = {
    content:string
}

const CardTitleSection = ({content}: Props) => {
  return (
    <div >
        <p className='cardTitle'> {content} </p>
    </div>
  )
}

export default CardTitleSection