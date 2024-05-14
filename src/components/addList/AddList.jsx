import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddList = ({onTaskSaved}) => {

    const [showForm, setShowForm] = useState(false);
    const [taskInput, setTaskInput] = useState('');
    const [taskStatus, setTaskStatus] = useState(false)

    const handleShowForm = () => {
        setShowForm(!showForm);
    }

    const handleInputChange = (event) => {
        setTaskInput(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        const newTask = {
            value: taskInput,
            status: taskStatus
        }
        onTaskSaved(newTask)
    }


    return (
        <div>
            <Button onClick={handleShowForm} className='addButton' >
                {showForm ? "Cancelar" : "Agregar tarea"}
            </Button>
            {showForm && (
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="newTask">
                        <Form.Label>Nueva tarea</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese la nueva tarea"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Agregar
                    </Button>
                </Form>
            )}
        </div>
    )
}

export default AddList