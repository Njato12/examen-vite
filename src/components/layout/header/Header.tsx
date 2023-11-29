
import Button from '../../general/button/Button'
import { Link } from 'react-scroll'
import './header.scss'
type Props = {}

const Header = ({}: Props) => {
  return (
    <div className='header'>
      <Link to='accueil' smooth={true} duration={500}>
        <Button className='nav' text='Accueil' />
      </Link>
      <Link to='competence' smooth={true} duration={500}>
        <Button className='nav' text='Compétence' />
      </Link>
      <Link to='apropos' smooth={true} duration={500}>
        <Button className='nav' text='Apropos' />
      </Link>
      <Link to='contact' smooth={true} duration={500}>
        <Button className='nav' text='Contact' />
      </Link>
      
    </div>
  )
}

export default Header