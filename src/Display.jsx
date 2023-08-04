import React, { useState } from 'react'


const Display = (props) => {

    const deleteNewTask = (Idx) => {
        props.deleteTask(Idx)
        console.log(Idx)

    }

    const toggleCheck = (arrIdx, targetBool)=> {
        props.toggleUpdate(arrIdx, targetBool)
    }

    return (


        <div>
            {props.nextAdd.map((newTask, Idx) => {
                return (
                    <div style={newTask.isComplete?{textDecoration:"line-through", color: "red"}:{textDecoration: "none", color: "black"}}>
                        <p>To Do: {newTask.toDo}</p>
                        <input type='checkbox' checked = {newTask.isComplete}
                            onChange={e=>toggleCheck(Idx, e.target.checked)}
                        ></input>
                        <button onClick={() => deleteNewTask(Idx)}>Delete</button>
                    </div>

                )
            })}


        </div>
    )
}

export default Display