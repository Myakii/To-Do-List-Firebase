import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import '../css/Register.css';

export default function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {

    setEmail(e.target.value);

  }

  const handlePassword = (e) => {
    setPassword(e.target.value);  
  }

  const register = (e) => {

    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        navigate("/");
      })
  }


  return (
    <div className='register_form'>
      <h3 className='connect_to_register'>Inscription</h3>
      <p>Rejoignez notre communauté en vous inscrivant ! </p>
      <form className='form_register'>
        <label className='register_label'>Adresse Email</label>
        <input className='register_input' type='email' onChange={handleEmail} />

        <label className='register_label'>Mot de passe</label>
        <input className='register_input' type='password' onChange={handlePassword} />

        <button type='submit' onClick={register}>S'inscrire</button>
        </form>
    </div>
  )
}
