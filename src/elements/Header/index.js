import React, { useContext, Fragment } from 'react'

import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'
import DisplayNameModal from './DisplayNameModal'
import { AuthContext } from '../../databaseAPI/auth'

import { Navbar } from 'react-bootstrap'


const Header = () => {
    const auth = useContext(AuthContext)
    const logOut = () => {
        auth.signOut()
    } 
    return (
        <Navbar bg="secondary" variant="light" className='px-5'>
            <Navbar.Brand href="/">Comentaki</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                {!auth.user && (
                    <Fragment>
                        <SignInModal signIn={auth.sign} />
                        <SignUpModal create={auth.create} />            
                    </Fragment>
                )}
                {auth.user && (
                    <Fragment>
                        <Navbar.Text className='align-top mr-2'>
                            <DisplayNameModal user={auth.user} />
                        </Navbar.Text>
                        <Navbar.Text className='align-top'>
                            <span onClick={logOut} title='Sair' style={{cursor: 'pointer'}}> &#10005;</span>
                        </Navbar.Text>
                    </Fragment>
                )}                   
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header

