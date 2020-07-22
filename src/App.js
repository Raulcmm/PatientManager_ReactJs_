import React from 'react'
import Form from './components/Form'

const App = () => {
  return (
    <div className="container text-center">
      <h1>Administrador de citas en ReactJs</h1>
      <div className="row">
        <div className="col-md-6">
          <Form/>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  )
}

export default App
