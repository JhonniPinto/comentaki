import React from 'react'
import { Card } from 'react-bootstrap'

import Time from './Time'

const Comment = ({data}) => {
  return (
    <Card className='my-2'>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
              {data.content}
            {' '}
          </p>
          <footer className="blockquote-footer">
            <cite title="Source Title">{data.user.name} ({<Time timestamp={data.createdAt} />})</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  )                                                 
}

export default Comment