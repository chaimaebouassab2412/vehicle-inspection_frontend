import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
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
  email: Yup.string()
    .email('Email invalide')
    .required('L\'email est requis'),
  password: Yup.string()
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    .required('Le mot de passe est requis'),
  confirmPassword: Yup.string()
    .when('isSignup', {
      is: true,
      then: Yup.string()
        .oneOf([Yup.ref('password')], 'Les mots de passe doivent correspondre')
        .required('La confirmation du mot de passe est requise'),
    }),
});

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
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
            {isSignup ? 'Créer un compte' : 'Connexion'}
          </FormTitle>
          <Formik
            initialValues={{
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
                    placeholder="Mot de passe"
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
                      placeholder="Confirmer le mot de passe"
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
                    ? 'Chargement...'
                    : isSignup
                    ? 'S\'inscrire'
                    : 'Se connecter'}
                </FormButton>
              </form>
            )}
          </Formik>

          <SwitchLink onClick={toggleMode}>
            {isSignup
              ? 'Déjà un compte ? Se connecter'
              : 'Pas de compte ? S\'inscrire'}
          </SwitchLink>
        </AuthCard>
      </AnimatePresence>
    </AuthContainer>
  );
};

export default Auth; 