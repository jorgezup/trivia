import styled from 'styled-components';

const StyledSelect = styled.select`
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--purple-secondary);
  outline: 1px solid var(--purple-border);
  color: white;
  font-size: 16px;

  &:focus {
    box-shadow: 0 0 3px 3px rgba(160, 153, 255, 0.5);
    outline: none;
  }
`;

export default StyledSelect;
