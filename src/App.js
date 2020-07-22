import React from 'react'
import Form from './components/Form'
import AppointmentList from './components/AppointmentList'

const App = () => {
  return (
    <div className="container text-center">
      <h1>Patient Manager</h1>
      <div className="row">
        <div className="col-md-6">
          <Form/>
        </div>
        <div className="col-md-6">
          <AppointmentList/>
        </div>
      </div>
    </div>
  )
}

export default App
