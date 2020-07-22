import React from 'react';
import AppointmentCard from './AppointmentCard';

const AppointmentList = ({ appointmentsList }) => {
	if (appointmentsList.length === 0) return null;
	return <div className="mt-2">
        {appointmentsList.map((appointment, index) => 
            <AppointmentCard key={index} appointment={appointment} />)}
        </div>;
};

export default AppointmentList;
