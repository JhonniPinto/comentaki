import React, {useState, Fragment} from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

const DisplayNameModal = ({user}) => {
    const [show, setShow] = useState(false)
    const [displayName, setDisplayName] = useState('')
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const handleDisplayName = e => setDisplayName(e.target.value)
    const saveDisplayName = () => {
        if (displayName !== '') {
            user.updateProfile({ displayName })
            setTimeout(() => setShow(false), 1000) 
        }
    }
    return (
        <Fragment>
        <span className='align-top mr-2' onClick={handleShow} style={{cursor: 'pointer'}} title='Altere o seu display name'>
            Olá, {user.displayName || user.email.split('@')[0]}
        </span>
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <Form>
                    <Modal.Title className='mb-4'>Altere o seu display name.</Modal.Title>
                    <Form.Group>
                        <Form.Control onChange={handleDisplayName} value={displayName} type="text" placeholder="Digite o seu novo display name" />
                    </Form.Group>
                    <Button onClick={saveDisplayName} variant="secondary">Salvar</Button>
                </Form>
            </Modal.Body>
        </Modal>
        </Fragment>
    )
}

export default DisplayNameModal