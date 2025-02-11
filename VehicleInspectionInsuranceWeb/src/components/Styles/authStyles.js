import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  padding: 20px;
`;

export const AuthCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h1`
  color: #1e3c72;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 2px solid #e1e1e1;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #1e3c72;
    outline: none;
  }
`;

export const FormButton = styled(motion.button)`
  width: 100%;
  padding: 12px;
  background: #1e3c72;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff3333;
  font-size: 0.875rem;
  margin-top: 4px;
`;

export const SwitchLink = styled.button`
  background: none;
  border: none;
  color: #1e3c72;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 0.9rem;
`; 