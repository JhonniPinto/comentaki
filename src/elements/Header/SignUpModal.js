import React, {useState, Fragment} from 'react'
import { Button, Modal, Form, Navbar } from 'react-bootstrap'

const SignUpModal = ({create}) => {
    const [show, setShow] = useState(false)
    const [account, setAccount] = useState({email: '', password: ''})
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const handleAccount = field => e => setAccount({...account, [field]: e.target.value})
    const handleCreate = () => {
        create.createMethod(account.email, account.password)
    }
    return (
        <Fragment>
        <Navbar.Text className='align-top' onClick={handleShow} style={{cursor: 'pointer'}}>Criar conta</Navbar.Text>
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <Form>
                    <Modal.Title className='mb-4'>Por favor, identifique-se.</Modal.Title>
                    <Form.Group>
                        <Form.Control onChange={handleAccount('email')} value={account.email} type="email" placeholder="Digite o seu e-mail" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control onChange={handleAccount('password')} value={account.password} type="password" placeholder="Digite a sua senha" />
                    </Form.Group>
                    {create.createState.error && <p className='alert alert-danger'>{create.createState.error}</p>}
                    <Button onClick={handleCreate} variant="secondary">Criar conta</Button>
                </Form>
            </Modal.Body>
        </Modal>
        </Fragment>
    )
}

export default SignUpModal