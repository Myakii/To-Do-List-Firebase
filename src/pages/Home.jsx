import React, { useContext } from 'react'
import { authContext } from '../Auth.jsx'
import ToDo_List from '../components/Todo_list';
import '../css/Home.css'

export default function Home() {

  const connected_session = useContext(authContext); 
  
  return (  

    <div>
      {connected_session?
      <ToDo_List />
      :
      <div> <h2>Bienvenue sur Planisphère, la To-Do List pour tout le monde !</h2> </div>
      }
    </div>

  ) 
}
