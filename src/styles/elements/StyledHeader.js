import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 940px;

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

  span {
    font-size: 18px;
  }
`;

export default HeaderContainer;
