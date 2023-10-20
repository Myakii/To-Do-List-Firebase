import React, { useEffect, useState, useContext } from 'react';
import { TextField, Button } from '@mui/material';
import Todo from '../pages/todo';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp, where } from 'firebase/firestore';
import { authContext } from '../Auth';

export default function ToDo_List() {
    const connected_session = useContext(authContext); // Contexte de Authent, le provider vient de Auth.jsx
    const [todos, setTodos] = useState([]);
    // Création de la ToDoList simple
    const [input, setInput] = useState("")
    const [filter, setFilter] = useState("En cours");
    const [queryFilter, setQueryFilter] = useState(query(collection(db, 'todos'), where('user_id', '==', connected_session.uid), orderBy('timestamp', 'desc')));

    const filteredTask = (e) => {
        
        setFilter(e.target.value);
    }

    useEffect(() => {
        if (filter === "En cours") setQueryFilter(query(collection(db, 'todos'), where('user_id', '==', connected_session.uid), orderBy('isCompleted', 'desc')))
        if (filter === "Terminées") setQueryFilter(query(collection(db, 'todos'), where('user_id', '==', connected_session.uid), orderBy('isCompleted', 'asc')))
        // if (filter === "date") setQueryFilter(query(collection(db, 'todos'), where('user_id', '==', connected_session.uid), orderBy('timestamp', 'asc')))
        // if (filter === "all") setQueryFilter(query(collection(db, 'todos'), where('user_id', '==', connected_session.uid), orderBy('timestamp', 'desc')))
        // useEffect est utilisé pour exécuter du code en réponse à des changements dans le composant
        onSnapshot(queryFilter, (snapshot) => {
            // Interraction avec une base de donnée ou une source de donnée externe
            setTodos(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        });
    }, [filter]);


    const addTodo = (e) => {
        if (input == "") {
            e.preventDefault();
        } else {
            e.preventDefault();
            addDoc(collection(db, "todos"), {
                user_id: connected_session.uid,
                user_email: connected_session.email,
                todo: input,
                timestamp: serverTimestamp(),
                isCompleted: false,
            });
            setInput("")
            // Création de l'ajout dans la ToDo
        }
    };

    return (
        <div>
            <div className='headertodo'>
                <h2>Ma To-Do List</h2>
            </div>
            <div className='my_todolist'>
                <form className='my_form_todolist'>
                <TextField id="outlined-basic" label="Ajoutez votre tâche" size='small' value={input} onChange={e => setInput(e.target.value)} />
                <Button sx={{ backgroundColor: '#8B786D', '&:hover': {backgroundColor: '#72635A;'}}} variant='contained' onClick={addTodo} type='submit'>Ajouter la tâche</Button>
                </form>
                <div id="filter_element">
                    <Button sx={{ m: 2, fontFamily: 'Playpen Sans,  sans-serif', fontWeight: 'bold'}} style={{ color: '#EBF5EE', fontSize: 17 }} className='btn_finish' onClick={filteredTask} value='Terminées'>Terminées</Button>
                    <Button sx={{ m: 2, fontFamily: 'Playpen Sans,  sans-serif', fontWeight: 'bold'}} style={{ color: '#EBF5EE', fontSize: 17 }} className='btn_progress' onClick={filteredTask} value='En cours'>En cours</Button>
                </div>
                <div className='list_task'>
                    <ul>
                        <p>Trier par: {filter} </p>
                        <h3>Liste des tâches :</h3>
                        {todos.map(item => <Todo key={item.id} arr={item} />)}
                    </ul>
                </div>
            </div >
        </div >
    );
}