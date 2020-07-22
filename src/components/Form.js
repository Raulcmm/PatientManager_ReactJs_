import React from 'react';
import useForm from '../hooks/useForm';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ setAppointmentsList }) => {
	const initialState = {
		pet: '',
		owner: '',
		date: '',
		hour: '',
		symptoms: ''
	};

	const { data, handleChange } = useForm(initialState);

	const handleSubmit = (e) => {
		e.preventDefault();
		data.id=uuidv4(); 
        setAppointmentsList(appointment=>[...appointment,data])
        e.currentTarget.reset(); 
	};

	return (
		<div className="mt-2">
			<h2>Add a new appointment</h2>
			<form onSubmit={handleSubmit} className="text-left">
				<div className="form-group">
					<label>Pet's name</label>
					<input
						type="text"
						className="form-control"
						placeholder="Pet's name"
						name="pet"
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<label>Owner's name</label>
					<input
						type="text"
						className="form-control"
						placeholder="Owner's name"
						name="owner"
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<label>Date</label>
					<input type="date" className="form-control" name="date" onChange={handleChange} required />
				</div>
				<div className="form-group">
					<label>Hour</label>
					<input type="time" className="form-control" name="hour" onChange={handleChange} required />
				</div>
				<div className="form-group">
					<label>Symptoms</label>
					<textarea
						name="symptoms"
						cols="30"
						rows="5"
						className="form-control"
						onChange={handleChange}
						required
					/>
				</div>
				<button className="btn btn-success float-right" type="submit">
					Send
				</button>
			</form>
		</div>
	);
};

export default Form;
