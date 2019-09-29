import React from 'react'
import Comment from './Comment'
import { Spinner } from 'react-bootstrap'

import { useGetDatabase } from '../../databaseAPI/database' 

const Comments = () => {
    const data = useGetDatabase('comments')
    if (data === null) return <div className='container'><p>Não há comentários inseridos até o momento...</p></div>
    if (Object.keys(data).length === 0) return <div className='container'><Spinner animation="grow" role="status" /></div>
    const ids = Object.keys(data)
    return (
      <div className='container'>
        {ids.map(id => <Comment key={id} data={data[id]} />)}
      </div>
    )
}

export default Comments