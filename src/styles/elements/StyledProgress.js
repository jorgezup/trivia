import styled from 'styled-components';

const StyledProgress = styled.progress`
  appearance: none;
  width: 250px;

  ::-webkit-progress-bar {
    height: 16px;
    border-radius: 20px;
    background-color: var(--green-secondary);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  ::-webkit-progress-value {
    height: 16px;
    border-radius: 20px;
    background-color: var(--green-primary);
    transition: all .2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;

export default StyledProgress;
