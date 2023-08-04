import React, {useState} from "react";
const List = (props) => {
    const [toDo, setToDo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const task = {toDo, isComplete: false}
        props.newList(task)
        setToDo("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>To Do: </label>
                <input type="text" name="list" value={toDo} onChange={e=>setToDo(e.target.value)}></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default List