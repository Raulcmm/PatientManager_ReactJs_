import React from 'react';

const AppointmentCard = ({ appointment,deleteAppointment }) => {
	const { pet, owner, date, hour, symptoms } = appointment;
	return (
		<div className="card mb-3">
			<div className="card-header">Appointment on: { date }  at : {hour} hrs</div>
			<div className="card-body text-left">
				<h5 className="card-title">{owner} <small>(owner)</small></h5>
				<p className="card-text "> {pet} <small>(pet)</small></p>
				<p className="card-text ">Symptoms: <br/> {symptoms}</p>
                <button className="btn btn-danger " onClick={()=>deleteAppointment(appointment.id)}> Delete</button>
			</div>
		</div>
	);
};

export default AppointmentCard;
