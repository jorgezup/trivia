import styled from 'styled-components';

const StyledList = styled.ol`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style-type: none;
  overflow-y: auto;
  max-height: 500px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--purple-secondary);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: var(--purple-border);
    border-radius: 10px;
  }

  & li {
    font-size: 16px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(160, 153, 255, 0.25);
    margin-right: 20px;
    background-color: var(--purple-primary);
  
    & span:last-of-type {
      margin-right: 5px;
    }
  }
`;

export default StyledList;
