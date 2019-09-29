import React, {useState, Fragment} from 'react'
import { Button, Modal, Form, Navbar } from 'react-bootstrap'

const SignInModal = ({signIn}) => {
    const [show, setShow] = useState(false)
    const [sign, setSign] = useState({email: '', password: ''})
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const handleSign = field => e => setSign({...sign, [field]: e.target.value})
    const handleSignIn = () => {
        signIn.signInMethod(sign.email, sign.password)
    }
    return (
        <Fragment>
        <Navbar.Text className='align-top mr-4' onClick={handleShow} style={{cursor: 'pointer'}}>Entrar</Navbar.Text>
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <Form>
                    <Modal.Title className='mb-4'>Por favor, identifique-se.</Modal.Title>
                    <Form.Group>
                        <Form.Control onChange={handleSign('email')} value={sign.email} type="email" placeholder="Digite o seu e-mail" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control onChange={handleSign('password')} value={sign.password} type="password" placeholder="Digite a sua senha" />
                    </Form.Group>
                    {signIn.signInState.error && <p className='alert alert-danger'>{signIn.signInState.error}</p>}
                    <Button onClick={handleSignIn} variant="secondary">Entrar</Button>
                </Form>
            </Modal.Body>
        </Modal>
        </Fragment>
    )
}

export default SignInModal