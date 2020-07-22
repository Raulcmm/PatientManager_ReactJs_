import React from 'react';
import AppointmentCard from './AppointmentCard';
import PropTypes from 'prop-types';

const AppointmentList = ({ appointmentsList,deleteAppointment }) => {
	if (appointmentsList.length === 0) return null;
	return <div className="mt-2">
        {appointmentsList.map((appointment) => 
            <AppointmentCard key={appointment.id} appointment={appointment} deleteAppointment={deleteAppointment} />)}
        </div>;
};


AppointmentList.propType={
    appointmentsList:PropTypes.array.isRequired,
    deleteAppointment:PropTypes.func.isRequired
}

export default AppointmentList;
