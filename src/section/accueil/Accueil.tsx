import { useEffect } from 'react'
import './accueil.scss'
import Button from '../../components/general/button/Button'
import Triangle from '../../Assets/svg/Triangle'
import Rond from '../../Assets/svg/Rond'
import image1 from '../../Assets/image/image1.png'
import image2 from '../../Assets/image/image2.png'
import image3 from '../../Assets/image/image3.png'
import { gsap } from "gsap";
import { Link } from 'react-scroll'


const tl = gsap.timeline()


export default function Accueil() {

  useEffect(() => {
    gsap.fromTo('.letter', {
      opacity: 0
    }, {
      opacity: 1,
      stagger: 0.2,
      duration: 0.1,
      delay: 2,
    })
  })
  useEffect(() => {

    tl.fromTo('.image1', {
      scale: 0,
    }, {
      scale: 1,
      duration: 1,
      ease: "elastic",

    })
    tl.fromTo('.image2', {
      scale: 0,
    }, {
      scale: 1,
      duration: 1,
      ease: "elastic"

    })
    tl.fromTo('.image3', {
      scale: 0,
    }, {
      scale: 1,
      duration: 1,
      ease: "elastic"

    })
  })


  useEffect(() => {
    gsap.fromTo('.triangle1', {
      scale: 0,
      rotateY: 360,
    }, {
      scale: 1,
      rotateY: 0,
      duration: 2,
      repeat: -1,
      yoyo: true

    }
    )
    gsap.fromTo('.triangle2', {
      scale: 0,
      rotate: -360,
    }, {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: 0.5,
      repeat: -1,
      yoyo: true,


    }
    )
    gsap.fromTo('.triangle3', {
      scale: 0,
      rotateX: 180,
    }, {
      scale: 1,
      rotateX: 0,
      duration: 1,
      repeat: -1,
      yoyo: true

    }
    )
  }, [])
  useEffect(() => {
    gsap.fromTo('.rond', {
      scale: 0.5,
    }, {
      stagger: {
        each: 1,
        yoyo: true,
        repeat: -1,
        from: 'center'

      },
      scale: 1,
      duration: 2,

    }
    )

  }, [])


  return (
    <div className='wrap_Accueil' id='accueil'>
      <Triangle className='triangle1' />
      <Triangle className='triangle2' />
      <Triangle className='triangle3' />
      <Rond className='rond rond1' />
      <Rond className='rond rond2' />
      <Rond className='rond rond3' />
      <img className='image image1' src={image1} alt="" />
      <img className='image image2' src={image2} alt="" />
      <img className='image image3' src={image3} alt="" />
      <div className='accueil'>
        <div className="wrap_textIntro">
          <div className="textIntro">
            <h1 className='title'>
              <span className='letter'>B</span>
              <span className='letter'>i</span>
              <span className='letter'>e</span>
              <span className='letter'>n</span>
              <span className='letter'>v</span>
              <span className='letter'>e</span>
              <span className='letter'>n</span>
              <span className='letter'>u</span>
              <span className='letter'>e</span>
            </h1>
            <p>Herilaza NJATO</p>
            <p className='dev'>Developpeur Front-End</p>
          </div>
          <div className="button">
            <Link to='contact' smooth={true} duration={500}>
              <Button className='buttonAp' text='Contact' />
            </Link>

          </div>

        </div>

      </div>
    </div>
  )
}
