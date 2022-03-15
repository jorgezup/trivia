import styled from 'styled-components';

export const SectionScore = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  h2 {
    margin-bottom: 30px;
    color: var(--yellow-secondary);
    text-shadow: -1px 1px 0 var(--yellow-primary);
  }

  span {
    font-size: 16px;
  }
`;

export const SectionButtons = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
