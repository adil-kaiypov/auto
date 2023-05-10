import { useState } from 'react';
import classes from './todo.module.css';


const Todo = (props) =>{

    const [todo, setTodo] = useState(props);
    const [isEdit, setIsEdit] = useState(false);
    const [newTitle, setNewTitle] = useState("");

    const done = () =>
    {
        setTodo({...todo, completed: !todo.completed})
    }

    const editDone = (e) =>
    {
        e.preventDefault();
        setTodo({...todo, title: newTitle})
        setNewTitle('');
        setIsEdit(!isEdit);
    }

    return(
        <div className={classes.todo}>
        {
            !isEdit && (
                <>
                    <div>
                        <h2>{todo.title}</h2>
                        <p>{todo.completed ? 'done' : 'not done'}</p>
                        <p>№{todo.id}</p>  
                    </div>
                    <div className={classes.buttons}>
                        <button onClick={() => props.del(props.id)}>Delete</button>
                        <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
                        <button onClick={done}>Done</button>
                    </div>
                </>
            )
        }
        {
            isEdit && (
                    <form action="" onSubmit={editDone}>
                        <label htmlFor="">New title:</label>
                        <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)}/>
                        <br />
                        <div className={classes.buttons}>
                            <button onClick={() => {setIsEdit(!isEdit); setNewTitle('')}}>Cancel</button>
                            <button type='submit'>Done</button>    
                        </div>
                    </form>
            )
        }
        </div>
    )
}

export default Todo;