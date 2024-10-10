import React from 'react';


const Display = ({ item, id, editTodos, setNewDesc, newTittle, newDesc, updateTodo, editTodo, setTodos, newtittle, setNewTittle, deleteTodo, setNewTodo, setTittle, setEditTodo, index, newTodo, toggleStatus }) => {


    return (
        <div>

            <hr></hr>
            <div key={index}>



                {editTodo === item.id ? (
                    <>
                        <label class='new-tittle'>
                            New Tittle:
                            <input id='titt' type="text" value={newtittle} onChange={(e) => setNewTittle(e.target.value)} />
                        </label>
                        <label class='new-desc'>
                            New Description:
                            <input type="text" value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
                        </label>
                        <button onClick={() => { editTodos(item.id, newTittle, newDesc) }}>Save</button>
                        <button onClick={() => setEditTodo(null)}>Cancel</button>
                    </>
                ) : (
                    <>



                        <div class="col">
                            <div class="card h-100">

                                <div class="card-body">
                                    <h3><b>ID :</b>{item.id}</h3>
                                    <h1><b>Tittle :</b>{item.tittle}</h1>
                                    <p><b>Description :</b>{item.description}</p>
                                    <p>Status: {item.status}</p>
                                </div>
                                <div class="card-footer">
                                    <button onClick={() => setEditTodo(item.id)}>Edit</button>
                                    <button onClick={() => deleteTodo(item.id)}>Delete</button>
                                    <button onClick={() => toggleStatus(item.id)}>ChangeStatus</button>
                                </div>
                            </div>
                        </div>


                    </>
                )}


            </div>
        </div>

    );
};

export default Display;