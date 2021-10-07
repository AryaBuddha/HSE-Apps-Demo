import React, {useState} from 'react'
import Task from './Task';
import Button from '@mui/material/Button';

function Tasks(){
    const taskData = {
        Title: "Default Title",
        Date: "9/29/21", 
        Description: "Description", 
        Completed: false 
    }

    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        setTasks([...tasks, taskData])
    }

    return (
        <div>
            <Button 
                variant="contained" 
                onClick={addTask}
                style={{margin: "10px auto", display: "block"}}
            >
                Add Task
            </Button>
            {tasks.map((task) => (
                <Task 
                    Title={task.Title}
                    Date={task.Date}
                    Description={task.Description}
                    Completed={task.Completed}
                />
            ))}
        </div>
    )
}


export default Tasks