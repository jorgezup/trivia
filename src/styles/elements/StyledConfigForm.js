import styled from 'styled-components'

const StyledConfigForm = styled.form`
  width: 100%;
  max-width: 420px;
  padding: 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  background-color: var(--purple-primary);
  box-shadow: 8px 8px 40px 10px rgb(0 0 0 / 50%);
  border: 3px solid var(--purple-border);
  border-radius: 20px;

  input {
    width: 30%;
    margin-left: 20px;
  }

  select {
    width: 100%;
    margin-top: 10px;
  }

  button {
    align-self: center;
  }
`

export default StyledConfigForm
