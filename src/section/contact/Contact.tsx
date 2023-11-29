import { useEffect } from 'react'
import profil from '../../Assets/image/contact.png'
import './contact.scss'
import CardContact from '../../components/display/cardContact/CardContact'
import CardTitleSection from '../../components/display/cardTitleSection/CardTitleSection'
import ExagonCont1 from '../../Assets/svg/ExagonCont1'
import ExagonCont2 from '../../Assets/svg/ExagonCont2'
import Triangle from '../../Assets/svg/Triangle'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Props = {}

const Contact = ({}: Props) => {
  
  useEffect(() => {
    gsap.fromTo('.triangleContTop', {
      scale:0,
      rotateX: 250,
      duration:2,
      repeat:-1,
      yoyo: true
    },{
      scale:1,
      rotateX:0,
      duration:1,
      repeat:-1,
      yoyo: true

    }
    )
    gsap.fromTo('.triangleContBottom', {
      scale:0,
      rotateY: -360,
      duration:2,
      repeat:-1,
      yoyo: true
    },{
      scale:1,
      rotateY:0,
      duration:2,
      repeat:-1,
      yoyo: true

    }
    )
    gsap.fromTo('.exagCont1',{
      y:-200,

    },{
      y:0,
      duration:1,
      scrollTrigger:{
        trigger:'.exagCont1',
        start:'top center',
        end: 'bottom center'
      },
      ease:'bounce'
    })
    gsap.fromTo('.exagCont2',{
      y:200,

    },{
      y:0,
      duration:1,
      scrollTrigger:{
        trigger:'.exagCont1',
        start:'top center',
        end: 'bottom center'
      },
      ease:'bounce'

    })
  }, [])
  
  return (
    <div className='wrap_contact' id='contact'>
      <CardTitleSection content='Contact' />
      <ExagonCont1 className='exagCont1'/>
      <ExagonCont2 className='exagCont2'/>
      <Triangle className='triangleContTop'/>
      <Triangle className='triangleContBottom'/>
      <div className="contact">
        <div className="profil">
          <img src={profil} alt="" />
          <div className="textContact">
            <p><span>NJATO</span></p>
            <p className='dev'>Developpeur Front-End</p>
            <p><span>email: </span>herilazanjato@gmail.com</p>
            <p><span>Tél: </span>+261 34 13 344 90</p>
          </div>
        </div>
        <div className="conversation">
          <CardContact />
        </div>
      </div>


    </div>
  )
}

export default Contact