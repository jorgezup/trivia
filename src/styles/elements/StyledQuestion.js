import styled from 'styled-components';

export const QuestionTitleSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

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
    font-size: 14px;
    color: var(--yellow-primary);
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
      opacity: 0.8;
      background: url('https://stopots.com/images/sprite.png');
      background-position: 0px -545px !important;
    }

    &:disabled {
      opacity: 0.4;
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
