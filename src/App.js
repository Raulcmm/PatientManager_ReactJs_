import React, { useState } from 'react'
import Form from './components/Form'
import AppointmentList from './components/AppointmentList'

const App = () => {
 
  const [appointmentsList, setAppointmentsList] = useState([])
  return (
    <div className="container text-center">
      <h1>Patient Manager</h1>
      <div className="row">
        <div className="col-md-6">

          <Form setAppointmentsList={setAppointmentsList}/>
        </div>
        <div className="col-md-6">
        <h2>{appointmentsList.length === 0 ? "There aren't appointments " : 'Manage your appointments'}</h2>
          <AppointmentList
          appointmentsList={appointmentsList}/>
        </div>
      </div>
    </div>
  )
}

export default App
