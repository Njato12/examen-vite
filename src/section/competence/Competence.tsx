import { useEffect } from 'react'
import './competence.scss'
import Button from '../../components/general/button/Button'
import IconReact from '../../Assets/svg/IconReact'
import IconJs from '../../Assets/svg/IconJs'
import IconTs from '../../Assets/svg/IconTs'
import IconHtml from '../../Assets/svg/IconHtml'
import IconCss from '../../Assets/svg/IconCss'
import IconSass from '../../Assets/svg/IconSass'
import IconTailwind from '../../Assets/svg/IconTailwind'
import IconGit from '../../Assets/svg/IconGit'
import IconVercel from '../../Assets/svg/IconVercel'
import IconFigma from '../../Assets/svg/IconFigma'
import ExagonComp1 from '../../Assets/svg/ExagonComp1'
import ExagonComp2 from '../../Assets/svg/ExagonComp2'
import Rond from '../../Assets/svg/Rond'
import Triangle from '../../Assets/svg/Triangle'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-scroll'

gsap.registerPlugin(ScrollTrigger)
function Competence() {
  useEffect(() => {
    gsap.fromTo('.exagC1', {
      x: -200,
    }, {
      x: 0,
      scrollTrigger: {
        trigger: '.exagC1',
        start: 'top 70%',
        scrub: 0.5,
      }
    })
    gsap.fromTo('.exagC2', {
      y: -100,
    }, {
      y: 10,
      scrollTrigger: {
        trigger: '.exagC1',
        start: 'top 70%',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
  }, [])

  useEffect(() => {
    gsap.fromTo('.triangleComp', {
      rotate: 180,
      rotateX: -360,
    }, {
      rotate: 0,
      rotateX: 0,
      duration: 1,
      repeat: -1,
      yoyo: true,


    }
    )
    gsap.fromTo('.triangleComp2', {
      rotate: 360,
      rotateY: 360,
      rotateX: 360,
      rotateZ: 360
    }, {
      rotate: 0,
      rotateY: 0,
      rotateX: 0,
      rotateZ: 0,
      duration: 2.5,
      repeat: -1,
      yoyo: true

    }
    )
    gsap.fromTo('.rondComp', {
      scale: 0.5,
    }, {
      scale: 1,
      yoyo: true,
      repeat: -1,
      duration: 2,

    })
    gsap.fromTo('.skill', {
      opacity: 0
    }, {
      opacity
        : 1,
      stagger: 0.1,
      duration: 0.5,
      ease: 'elastic',
      scrollTrigger: {
        trigger: '.cardCompetence',
        toggleActions: "restart reverse play reverse",
        start: 'top 80%',
        end: 'bottom 25%',
      }
    })
  }, [])




  return (
    <div className='container_competence' id='competence'>
      <ExagonComp1 className='exagC1' />
      <ExagonComp2 className='exagC2' />
      <Rond className='rondComp' />
      <Triangle className='triangleComp' />
      <Triangle className='triangleComp2' />
      <div className='competence'>
        <div className="wrapCardCompetence">
          <div className="cardCompetence">
            <p>Elles sont en constantes améliorations car pour moi la joie de ce métier fait que l’on en apprend tous les jours, d’autant plus en étant impliqué, curieux et passionné.</p>
            <div className="competenceS">
              <div className="language">
                <IconReact />
                <IconJs />
                <IconTs />
                <IconHtml />
                <IconCss />
                <IconSass />
                <IconTailwind />
                <IconGit />
                <IconVercel />
                <IconFigma />
              </div>
            </div>


          </div>

        </div>
        <div className="button">
          <Link to='contact' smooth={true} duration={500}>
            <Button className='buttonAp' text='Contact' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Competence