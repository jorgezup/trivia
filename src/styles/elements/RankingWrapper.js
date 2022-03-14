import styled from 'styled-components';

const RankingWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  gap: 20px;
  width: 100%;
  max-width: 450px;
  height: auto;
  padding: 20px 40px;
  background-color: var(--purple-primary);
  box-shadow: 8px 8px 40px 10px rgb(0 0 0 / 50%);
  border: 3px solid var(--purple-border);
  border-radius: 20px;
`;

export default RankingWrapper;
