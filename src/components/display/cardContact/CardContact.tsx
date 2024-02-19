import React, { useRef, useState } from 'react'
import './cardContact.scss'
import { TextField } from '@mui/material'
import Button from '../../general/button/Button'
import axios from 'axios'
import toast from 'react-hot-toast'




const CardContact = () => {

  const nom: React.RefObject<HTMLInputElement> = useRef(null)
  const email: React.RefObject<HTMLInputElement> = useRef(null)
  const sujet: React.RefObject<HTMLInputElement> = useRef(null)
  const message: React.RefObject<HTMLTextAreaElement> = useRef(null)

  const [user, setUser] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const post = async () => {
    try {
      const { nom, email, sujet, message } = user;

      if (!nom || !email || !sujet || !message) {
        toast.error('Veuillez remplir tous les champs');
      } else {
        await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
        console.log('success');

        setUser({
          nom: '',
          email: '',
          sujet: '',
          message: '',
        });

        toast.success('Message envoyé avec succès');
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.error(`error`);
    }
  };

  return (
    <div className='wrap_cardContact'>
      <div className="input">
        <TextField 
          inputRef={nom}
          onChange={handleChange}
          label="Nom"
          variant="standard"
          name="nom"
          type="text"/>
        <TextField
          inputRef={sujet}
          onChange={handleChange}
          label="Sujet"
          variant="standard"
          name="sujet"
          type="text" />
        <TextField
          inputRef={email}
          onChange={handleChange}
          label="Email"
          variant="standard"
          name="email"
          type="email"/>
      </div>
      <div className="cardMessage">
        <div className="message">
          <p>Message</p>
          <textarea 
            ref={message}
            onChange={handleChange}
            name="message"
            id="mess"
            value={user.message}></textarea>
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