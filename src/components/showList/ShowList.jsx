import React, { useState } from 'react'
import { Form, ListGroup } from 'react-bootstrap'
import AddList from '../addList/AddList'
import './ShowList.css'

import 'bootstrap-icons/font/bootstrap-icons.css'
const ShowList = () => {
    const [taskList, setTaskList] = useState([])
    

    const handleAddNewTask = (task) => {
        const taskData = {
            ...task,
            id: Math.random().toString(),
        };

        setTaskList((prev) => [...prev, taskData]);
    };

    const handleChangeStatus = (id) => {
        const modifyList = taskList.map((task) =>
            task.id === id ? { ...task, status: !task.status } : task
        );
        setTaskList(modifyList);
    }

    const handleCloseButton = (id) => {
            const modifiedList = taskList.filter(task => task.id !== id);
            setTaskList(modifiedList);
        };
    

    return (
    <div >
            <ListGroup>
                {taskList.length > 0 ?
                    taskList.map((task) => (
                        <ListGroup.Item key={task.id} className='Complete-Card'>
                            <Form className='Card'>
                                <p style={{ textDecoration: task.status ? 'line-through' : 'none' }}>{task.value}</p>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label={task.status ? "Completada" : "Por hacer"}
                                    checked={task.status}
                                    onChange={() => handleChangeStatus(task.id)}
                                />
                                
                            </Form>
                            <i className="bi bi-x deleteTask" onClick={() => handleCloseButton(task.id)}></i>
                        </ListGroup.Item>
                    ))
                    : <h1>No Hay tareas</h1>
                }
                
                <AddList onTaskSaved={handleAddNewTask}/>
            </ListGroup>

        </div>
    )
}

export default ShowList