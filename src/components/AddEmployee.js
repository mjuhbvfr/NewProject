import React, { useState } from 'react';
import {
	FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormLabel,
	FormInputRow,
	FormMessage,
	FormButton,
	FormTitle,
} from './FormStyles';
import { Container } from '../globalStyles';
import validateForm from './validateForm';
import { useDispatch } from 'react-redux';
import { addEmployeeToList } from '../store/employee.slice';
import { useNavigate } from 'react-router-dom';
{/* import { useHistory } from 'react-router-dom'; */}

const Form = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [designation, setDesignation] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
{/*	let history = useHistory(); */}

	const handleSubmit = (e) => {
        e.preventDefault();
		const resultError = validateForm({ name, email, mobile, designation });

		if (resultError !== null) {
			setError(resultError);
			return;
        }
        else{
            console.log(name, email,designation,mobile);
			dispatch(addEmployeeToList({name, email, mobile, designation}));
			setTimeout(() => {
				navigate('/employeeList');
			}, 1000);
        }
		setName('');
		setEmail('');
		setMobile('');
		setDesignation('');
		setError(null);
        setSuccess('Employee details are added!');
    

	{/*}	setTimeout(() => {
			history.push('/21');
        }); */}
        

	};

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

	const formData = [
		{ label: 'Employee Name', value: name, onChange: (e) => setName(e.target.value), type: 'text' },
		{ label: 'Employee Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },
		{
			label: 'Mobile No',
			value: mobile,
			onChange: (e) => setMobile(e.target.value),
			type: 'text',
		},
		{
			label: 'Employee Designation',
			value: designation,
			onChange: (e) => setDesignation(e.target.value),
			type: 'text',
		}
	];
	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn small>
						<FormTitle>Employee Details</FormTitle>
						<FormWrapper onSubmit={handleSubmit}>
							{formData.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label}</FormLabel>
									<FormInput
										type={el.type}
										placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
										value={el.value}
										onChange={el.onChange}
									/>
								</FormInputRow>
							))}

							<FormButton type="submit">ADD</FormButton>
						</FormWrapper>
						{error && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
								error
							>
								{error}
							</FormMessage>
						)}
						{success && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
							>
								{success}
							</FormMessage>
						)}
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>

    );
    
};

export default Form;