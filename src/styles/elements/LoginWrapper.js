import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginWrapper = styled.section`
  width: 100%;
  max-width: 350px;
  padding: 40px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  gap: 10px;
  background-color: var(--purple-primary);
  box-shadow: 8px 8px 40px 10px rgb(0 0 0 / 50%);
  border: 3px solid var(--purple-border);
  border-radius: 20px;
`;
