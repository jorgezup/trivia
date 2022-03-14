import styled from 'styled-components'

const StyledInput = styled.input`
  padding: 8px;
  border: none;
  width: 100%;
  margin-top: 10px;
  background-color: var(--blue-tertinary); 
  border-bottom: 1px solid white;
  letter-spacing: 1.4px;
  color: white;

  &:focus {
    background-color: var(--blue-tertinary);
    border-bottom: 1px solid white;
    outline: none;
  }
`

export default StyledInput
