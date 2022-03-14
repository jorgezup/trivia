import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  border: none;
  width: 100%;
  margin-top: 10px;
  background-color: var(--purple-primary);
  outline: 1px solid var(--purple-border);
  background-color: var(--purple-secondary);
  border-radius: 10px;
  font-size: 16px;
  letter-spacing: 1.4px;
  color: white;
  transition: 0.2s box-shadow ease-out;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px var(--purple-secondary) inset;
    transition: background-color var(--purple-secondary);
  }

  &:focus {
    box-shadow: 0 0 3px 3px rgba(160, 153, 255, 0.5);
    outline: none;
  }
`;

export default StyledInput;
