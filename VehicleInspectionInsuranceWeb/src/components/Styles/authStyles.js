import styled from '@emotion/styled';
import { motion } from 'framer-motion';
export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  width: 100vw;
  background: ${({ theme }) =>
    theme === "dark"
      ? "linear-gradient(135deg, #000, #0092b1)" /* Black and yellow */
      : "linear-gradient(135deg, #0092b1, #fff)"}; /* Yellow and white */
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
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
  color: black; /* Set the text color to black */
  background-color: white; /* Ensure background is white */
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #1e3c72; /* Adjust focus border color */
    outline: none;
  }
`;


export const FormButton = styled(motion.button)`
  width: 100%;
  padding: 12px;
  background: ${({ theme }) =>
    theme === "dark" ? "#000" : "#0092b1"}; /* Black for dark, Yellow for light */
  color: ${({ theme }) => (theme === "dark" ? "#0092b1" : "#000")};
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