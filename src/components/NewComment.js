import React, {useState, useContext} from 'react'

import { Form, Button } from 'react-bootstrap'

import firebase from '../firebase'
import {usePushDatabase} from '../databaseAPI/database'
import { AuthContext } from '../databaseAPI/auth'


const NewComment = () => {
  const auth = useContext(AuthContext)
  const [comment, setComment] = useState('')
  const [ ,push] = usePushDatabase('comments')
  const commentHandler = e => setComment(e.target.value)
  const createComment = () => {
    push({
      content: comment,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: auth.user.uid,
        name: auth.user.displayName || auth.user.email.split('@')[0]
      }
    })
  }
  if (auth.user === null) return null
  return (
    <div className='container my-3'>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control onChange={commentHandler} value={comment} as="textarea" rows="2" placeholder='Adicione um comentário' />
        </Form.Group>
        <Button onClick={createComment} variant="secondary">
          Comentar
        </Button>
      </Form>
    </div>
  )
}

export default NewComment