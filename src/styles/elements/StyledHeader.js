import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 840px;
  height: 100px;

  margin: 0 auto;
  margin-top: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  padding: 16px 8px;

  border: 2px solid var(--purple-border);
  border-radius: 20px;

  background-color: var(--purple-primary);
  box-shadow: 8px 8px 40px 10px rgb(0 0 0 / 50%);

  span {
    font-size: 18px;
  }

  span:last-child {
    color: var(--yellow-secondary);
    text-shadow: -1px 1px 0 var(--yellow-primary);
  }
`;

export default HeaderContainer;
