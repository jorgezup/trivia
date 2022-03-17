import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 4px solid var(--yellow-primary);
  border-right: 4px solid var(--yellow-primary);
  border-bottom: 4px solid var(--yellow-primary);
  border-left: 5px solid var(--yellow-secondary);
  background: transparent;
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export default StyledLoader;
