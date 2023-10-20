import { Checkbox, List, ListItem, ListItemAvatar, ListItemText, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"; 
import { db } from "../firebase"; 
import { doc, deleteDoc, updateDoc } from "firebase/firestore"; 
import '../css/todo.css'; 
import { useState } from "react"; 

// Définition du composant Todo
const Todo = ({ arr }) => {
  // Utilisation de useState pour gérer l'état de la case à cocher
  const [checkBoxTask, setBoxTask] = useState(arr.item.isCompleted);

  // Fonction pour mettre à jour l'état de la case à cocher
  const UpdateBoxTask = () => {
    setBoxTask(!checkBoxTask);
    
    // Mise à jour des données Firestore
    updateDoc(doc(db, "todos", arr.id), {
      isCompleted: !checkBoxTask,
    });
  };

  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar />
        <Grid container spacing={1}>
          <Grid item md={6}>
            <h3 style={{ color: '#EBF5EE' }}>Nom de la tâche :</h3>
            <ListItemText
              style={{ color: '#EBF5EE' }}
              primary={arr.item.todo}
            />
          </Grid>
          <Grid item md={6}>
            <h3 style={{ color: '#EBF5EE' }}>Date :</h3>
            <ListItemText
              style={{ color: '#EBF5EE' }}
              primary={arr.item.timestamp ? arr.item.timestamp.toDate().toLocaleString() : "Date non disponible"}
            />
          </Grid>
        </Grid>
      </ListItem>
      <Checkbox
        style={{ color: '#8B786D' }}
        checked={arr.item.isCompleted}
        onChange={UpdateBoxTask}
      />
      <DeleteIcon
        style={{ color: '#8B786D' }}
        className="delete-icon"
        onClick={() => {
          // Suppression des données Firestore
          deleteDoc(doc(db, "todos", arr.id));
        }}
      />
    </List>
  );
};

export default Todo;
