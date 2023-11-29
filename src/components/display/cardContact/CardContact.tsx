import React, { useRef, useState } from 'react'
import './cardContact.scss'
import { TextField } from '@mui/material'
import Button from '../../general/button/Button'
import axios from 'axios'

type Props = {}



const CardContact = (props: Props) => {

  let nom: any = useRef(null)
  let email: any = useRef(null)
  let sujet: any = useRef(null)
  let message: any = useRef(null)

  const [user, setUser] = useState({})
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const serviceId: string = 'service_8bgfta9'
  const templateId: string = 'template_b90lv7i'
  const publicKey: string = 'ySr4GMjV28nAh02k-'

  const data = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      ...user
    }
  }

  const post = async (e: any) => {






    let a = nom.lastElementChild.lastElementChild.value
    let b = email.lastElementChild.lastElementChild.value
    let c = sujet.lastElementChild.lastElementChild.value
    let d = message.value


    try {
      if (!a || !b || !c || !d) {
        alert('veuiller tous remplir les formulaires')
      }
      else {
        await axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
        console.log('succes');

        nom.lastElementChild.lastElementChild.value = ''
        email.lastElementChild.lastElementChild.value = ''
        sujet.lastElementChild.lastElementChild.value = ''
        message.value = ''
        alert('message envoyé')
        window.scrollTo(0,0)
      }


    }
    catch (error: any) {
      console.error(`${error.message}`);
    }



  }

  return (
    <div className='wrap_cardContact'>
      <div className="input">
        <TextField ref={el => nom = el} onChange={handleChange} label="Nom" variant="standard" name='nom' type='text' />
        <TextField ref={el => sujet = el} onChange={handleChange} label="Sujet" variant="standard" name='sujet' type='sujet' />
        <TextField ref={el => email = el} onChange={handleChange} label="Email" variant="standard" name='email' type='email' />
      </div>
      <div className="cardMessage">
        <div className="message">
          <p>Message</p>
          <textarea ref={el => message = el} onChange={handleChange} name="message" id="mess"></textarea>
        </div>
        <div className="envoye">
          <div className="button">
            <Button onClick={post} text='Envoyer' className='buttonSend' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardContact