import styled from 'styled-components';

const StyledProgress = styled.progress`
  appearance: none;
  width: 250px;

  ::-webkit-progress-bar {
    height: 15px;
    border-radius: 20px;
    background-color: var(--green-secondary);
  }

  ::-webkit-progress-value {
    height: 15px;
    border-radius: 20px;
    background-color: var(--green-primary);
    transition: all .2s ease-in-out;
  }
`;

export default StyledProgress;
