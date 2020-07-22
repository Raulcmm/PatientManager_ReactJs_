import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import AppointmentList from './components/AppointmentList';

const App = () => {
	
	const [ appointmentsList, setAppointmentsList ] = useState([]);

	//get the data when the app loaded
	useEffect(() => {
		const getAppointmentStorage = JSON.parse(localStorage.getItem('appointments'));
		if (getAppointmentStorage !== null) setAppointmentsList(getAppointmentStorage);
	}, []);

	const deleteAppointment = (id) => {
		localStorage.removeItem('appointments');
		const newApp = appointmentsList.filter((appointment) => appointment.id !== id);
		localStorage.setItem('appointments', JSON.stringify(newApp));
		setAppointmentsList(newApp);
	};

	return (
		<div className="container text-center">
			<h1>Patient Manager</h1>
			<div className="row">
				<div className="col-md-6">
					<Form setAppointmentsList={setAppointmentsList} appointmentsList={appointmentsList} />
				</div>
				<div className="col-md-6">
					<h2>{appointmentsList.length === 0 ? "There aren't appointments " : 'Manage your appointments'}</h2>
					<AppointmentList appointmentsList={appointmentsList} deleteAppointment={deleteAppointment} />
				</div>
			</div>
		</div>
	);
};

export default App;
