import React, { useState } from 'react';


const InputComp = ({ addTodoData, setFilter }) => {
    const [tittle, setTittle] = useState('')
    const [description, setDescription] = useState('')
    const handleSubmit = () => {
        addTodoData(tittle, description)
        setTittle('')
        setDescription('')
    }

    return (
        <div>
            <div id='input'>
                Tittle :  <input type="text" value={tittle} onChange={e => setTittle(e.target.value)} placeholder='Enter Tittle' />
                Description :   <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder='Enter Description' />
                <button onClick={handleSubmit}>Add Todo</button>
            </div>

            <label>
                Filter:
                <select onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="not-completed">Not Completed</option>
                </select>
            </label>
        </div>
    );
};

export default InputComp;