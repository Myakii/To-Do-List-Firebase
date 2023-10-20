import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authContext } from '../Auth'
import { Button } from '@mui/material';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import '../css/Navigation.css';

export default function Navigation() {


  const user = useContext(authContext);
  console.log(user);
  const navigate = useNavigate();

  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log('Deconnexion');
      navigate("/");


    }).catch(error => console.log(error));

  }

  return (
    <nav className='navbar'>
      <div className="navbar-container">


        <Link to="/" className='nav-items'>
          <h1>Planisphère</h1>
        </Link>
        {user == null ?
          <ul className='nav-items'>

            <li><Link to="/inscription" className='nav-item'><Button variant="contained">S'inscrire</Button></Link></li>
            <li><Link to="/connexion" className='nav-item'><Button variant="contained">Se connecter</Button></Link></li>

          </ul>

          :

          <ul className='nav-items'>
            <li className='nav-item'>Bienvenue {user.email} !</li>
            <li className="nav-item"><Button variant="contained" onClick={userSignOut}>Se déconnecter</Button></li>

          </ul>

        }


      </div>
    </nav>
  )

}
