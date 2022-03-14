import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 8px;
  border: none;
  width: 100%;
  margin-top: 10px;
  background-color: var(--purple-primary);
  border-bottom: 1px solid var(--purple-border);
  letter-spacing: 1.4px;
  color: white;
  transition: 0.2s border ease-in;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px var(--purple-primary) inset;
    transition: background-color var(--purple-primary);
  }

  &:focus {
    background-color: var(--blue-tertinary);
    border-bottom: 1px solid white;
    outline: none;
  }
`;

export default StyledInput;
