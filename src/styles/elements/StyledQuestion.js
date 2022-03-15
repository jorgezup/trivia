import styled from 'styled-components';

export const QuestionTitleSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 16px;

  background-color: var(--purple-primary);
  box-shadow: 8px 8px 40px 10px rgb(0 0 0 / 50%);
  border: 3px solid var(--purple-border);
  border-radius: 20px;

  padding: 20px;
  width: 618px;

  margin: 20px 0;

  & p {
    text-align: justify;
  }

  & p:first-child {
    color: var(--yellow-secondary);
    text-shadow: -1px 1px 0 var(--yellow-primary);
  }

  button {
    width: 25px;
    height: 25px;
    background-color: transparent;
    border: none;

    svg {
      width: 100%;
      height: 100%;
      color: var(--purple-tertiary);
    }
  }
`;

export const QuestionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--purple-primary);
  box-shadow: 8px 8px 40px 10px rgb(0 0 0 / 50%);
  border: 3px solid var(--purple-border);
  border-radius: 20px;

  padding: 20px;

  margin-bottom: 20px;

  button {
    /* color: #f6f6f6 !important; */
    align-self: center;
    justify-self: center;
    background: url('https://stopots.com/images/sprite.png');
    background-position: 0px -545px;
    width: 572px;
    height: 73px;
    transition: all 0.2s;

    & strong {
      width: 80%;
    }

    &:hover {
      opacity: 0.9;
      background: url('https://stopots.com/images/sprite.png');
      background-position: 0px -545px !important;
    }

    &:disabled {
      opacity: 0.7;
      background: url('https://stopots.com/images/sprite.png');
      background-position: 0px -545px !important;
    }
  }

  button {
    color: var(--purple-primary);
    svg {
      color: var(--purple-primary);
    }
  }
`;
