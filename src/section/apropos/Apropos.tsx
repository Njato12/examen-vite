import { useEffect } from 'react'
import about from '../../Assets/image/about.png'
import './apropos.scss'
import Button from '../../components/general/button/Button'
import ExagonAp1 from '../../Assets/svg/ExagonAp1'
import ExagonAp2 from '../../Assets/svg/ExagonAp2'
import Triangle from '../../Assets/svg/Triangle'
import Rond from '../../Assets/svg/Rond'
import { gsap } from "gsap";
import { Link } from 'react-scroll'



const Apropos = () => {
  useEffect(() => {
    gsap.fromTo('.triAp', {
      scale: 0,
      rotateY: 360,
      duration: 2,
      repeat: -1,
      yoyo: true
    }, {
      scale: 1,
      rotateY: 0,
      duration: 2,
      repeat: -1,
      yoyo: true

    }
    )
    gsap.fromTo('.ronde', {
      scale: 0.5,
    }, {
      stagger: {
        each: 1,
        yoyo: true,
        repeat: -1

      },
      scale: 1,
      duration: 1,

    }
    )
    gsap.fromTo('.exagAp1', {
      y: 150,

    }, {
      y: 0,
      scrollTrigger: {
        trigger: '.exagAp2',
        start: 'top center',
        end: 'bottom center',
        scrub: 1
      },
    })
    gsap.fromTo('.exagAp2', {
      y: -200,

    }, {
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.exagAp2',
        start: 'top center',
        end: 'bottom center',
        scrub: 1
      },
    })
  }, [])
  return (
    <div className='wrap_apropos' id='apropos'>
      <ExagonAp1 className='exagAp1' />
      <ExagonAp2 className='exagAp2' />
      <Triangle className='triAp' />
      <Rond className='ronde rondApTop' />
      <Rond className='ronde rondApBottom' />
      <div className="container_apropos">
        <div className="apropos">
          <img src={about} alt="" />
          <div className="textApropos">
            <p>Je suis <span className='dev'>ANDRIANJATO Herilaza</span></p>
            <p className='dev'>Developpeur Front-End</p>
            <p>Formé chez <span className='dev'>SAHA Academy</span></p>
          </div>
        </div>
        <Link to='contact' smooth={true} duration={500}>
          <Button className='buttonAp' text='Contact' />
        </Link>


      </div>
    </div>
  )
}

export default Apropos