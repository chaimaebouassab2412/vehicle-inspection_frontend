import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

import { AnimatePresence } from 'framer-motion';
import {
	AuthContainer,
	AuthCard,
	FormTitle,
	FormInput,
	FormButton,
	ErrorMessage,
	SwitchLink,
} from '../Styles/authStyles';

const validationSchema = Yup.object().shape({
	name: Yup.string().when('isSignup', {
		is: true,
		then: Yup.string().min(4, 'Name must be at 4 characters long')
			.required('Name is required')
	}),
	email: Yup.string()
		.email('Invalid email')
		.required('Email is required'),
	password: Yup.string()
		.min(8, 'Password must be at least 8 characters long')
		.required('Password is required'),
	confirmPassword: Yup.string()
		.when('isSignup', {
			is: true,
			then: Yup.string()
				.oneOf([Yup.ref('password')], 'Passwords must match')
				.required('Password confirmation is required'),
		}),
});

const Auth = () => {
	const [isSignup, setIsSignup] = useState(false);

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			const endpoint = isSignup
				? "http://localhost:2018/api/utilisateurs/register"
				: "http://localhost:2018/api/utilisateurs/login";

			// Make Axios POST request
			const response = await axios.post(endpoint, {
				nom: values.name,
				email: values.email,
				motDePasse: values.password,
				...(isSignup && { confirmPassword: values.confirmPassword }), // Include confirmPassword for signup
			});

			// Handle success (e.g., save token, navigate to dashboard)
			if (response.data.token) {
				localStorage.setItem("token", response.data.token);
				localStorage.setItem("nom", response.data.nom);
				localStorage.setItem("role", response.data.role);
				location.href = '/portal/dashboard';
			}

			resetForm();
		} catch (error) {
			console.error("Error:", error.response?.data || error.message);
			alert(error.response?.data?.message || "Something went wrong");
		} finally {
			setSubmitting(false);
		}
	};

	const toggleMode = () => {
		setIsSignup(!isSignup);
	};

	return (
		<AuthContainer>
			<AnimatePresence mode="wait">
				<AuthCard
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.3 }}
				>
					<FormTitle>
						{isSignup ? 'Create an Account' : 'Login'}
					</FormTitle>
					<Formik
						initialValues={{
							name: '',
							email: '',
							password: '',
							confirmPassword: '',
							isSignup,
						}}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}
					>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
							isSubmitting,
						}) => (
							<form onSubmit={handleSubmit}>
								{isSignup &&
									<div>
										<FormInput
											type="text"
											name="name"
											placeholder="Name"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.name}
										/>
										{errors.name && touched.name && (
											<ErrorMessage>{errors.name}</ErrorMessage>
										)}
									</div>
								}

								<div>
									<FormInput
										type="email"
										name="email"
										placeholder="Email"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.email}
									/>
									{errors.email && touched.email && (
										<ErrorMessage>{errors.email}</ErrorMessage>
									)}
								</div>

								<div>
									<FormInput
										type="password"
										name="password"
										placeholder="Password"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.password}
									/>
									{errors.password && touched.password && (
										<ErrorMessage>{errors.password}</ErrorMessage>
									)}
								</div>

								{isSignup && (
									<div>
										<FormInput
											type="password"
											name="confirmPassword"
											placeholder="Confirm Password"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.confirmPassword}
										/>
										{errors.confirmPassword && touched.confirmPassword && (
											<ErrorMessage>{errors.confirmPassword}</ErrorMessage>
										)}
									</div>
								)}

								<FormButton
									type="submit"
									disabled={isSubmitting}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									{isSubmitting
										? 'Loading...'
										: isSignup
											? 'Sign Up'
											: 'Login'}
								</FormButton>
							</form>
						)}
					</Formik>

					<SwitchLink onClick={toggleMode}>
						{isSignup
							? 'Already have an account? Login'
							: 'Don’t have an account? Sign Up'}
					</SwitchLink>
				</AuthCard>
			</AnimatePresence>
		</AuthContainer>
	);
};

export default Auth;
