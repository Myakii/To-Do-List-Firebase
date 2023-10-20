import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {

    setEmail(e.target.value);

  }

  const handlePassword = (e) => {

    setPassword(e.target.value);

  }

  const login = (e) => {

    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        navigate("/");

        // ...
      })
      .catch((error) => {

      });

  }

  return (
    <div className='login_form'>
      <h3 className='connect_to_connect'>Connexion</h3>

      <form className='connect_form'>
        <label className='login_label'>Adresse Email</label>
        <input className='login_input' type='text' onChange={handleEmail} />

        <label className='login_label'>Mot de passe</label>
        <input className='login_input' type='password' onChange={handlePassword} />

        <button type='submit' onClick={login}>Se connecter</button>
      </form>
    </div>
  )
}
