import { useState } from 'react';

const useForm = (initialState = {}) => {
	const [ data, setData ] = useState(initialState);

	const handleChange = ({ target }) => {
		setData({
			...data,
			[target.name]: target.value
		});
	};
	return {
		data,
		handleChange
	};
};

export default useForm;
