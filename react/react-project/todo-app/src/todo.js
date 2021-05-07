import { ListItem, ListItemText,List, ListItemAvatar, Button,Modal, makeStyles } from '@material-ui/core';
import React,{useState} from 'react'
import { db } from './firebase';
import DeleteForever from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  

function Todo(props) {

    const classes = useStyles();

    const [open,setOpen] = useState(false);
    const [input,setInput] = useState()

    const handleOpen = () =>{
        setOpen(true);
    }
    const hanleClose = () =>{
        setOpen(false);
    }

    const updateTodo = () =>{
        db.collection("todos").doc(props.todo.id).set({
            todo: input
        },{merge:true});
        setOpen(false);
    }

    return (
        <>
        <Modal
        open={open}
        onClose={e=>setOpen(false)}
        >
        <div className={classes.paper}>
            <h1> iam a modal</h1>
            <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
            <button onClick={updateTodo}>Update Todo</button>
        </div>
        </Modal>
        
        <List>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy deadlines"/>
            </ListItem>
            {/* <button onClick={e =>setOpen(true)}>Edit</button> */}
            <EditIcon onClick={e =>setOpen(true)} />
            <DeleteForever onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
        </>
    
    )
}

export default Todo;