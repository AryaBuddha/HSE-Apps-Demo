import React from 'react'
import Paper from "@mui/material/Paper"

const Task = ({Title, Date, Description, Completed}) => {
    return (
        <Paper
            elevation={4}
            style={{
                maxWidth: "500px",
                margin: "10px auto",
                padding: "10px"
            }}
        >
            <h2>{Title}</h2>
            <p>{Date}</p>
            <p>{Description}</p>
            <p>{Completed}</p>            
        </Paper>
    )
}

export default Task
