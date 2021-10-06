import React, {useState} from 'react'

function Tasks(){
    const taskData = {Name: "Default Name", Description: "Description", Date: "9/29/21", Status: "Unfinished" }

    const [tasks, setTasks] = useState([]);
    


    return (
        <>

            <div style={{backgroundColor: "blue"  }}>
                <h1>Hello</h1>
            </div>
            
        </>
    )
}


export default Tasks