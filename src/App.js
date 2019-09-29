import React from 'react'

import Header from './elements/Header'
import Comments from './components/Comments'
import NewComment from './components/NewComment'

import { AuthProvider } from './databaseAPI/auth'

function App() {
  return (
    <AuthProvider>
      <Header />
      <NewComment />
      <Comments />
    </AuthProvider>
  )
}

export default App;
