import styled from 'styled-components'

export const QuestionTitleSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--purple-primary);
  box-shadow: 8px 8px 40px 10px rgb(0 0 0 / 50%);
  border: 3px solid var(--purple-border);
  border-radius: 20px;

  padding: 20px;
  width: 470px;

  margin: 20px 0;
`

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
    color: #f6f6f6 !important;
    align-self: center;
    justify-self: center;
    background-position: 10px -489px;
    width: 430px;
    transition: all 0.2s;

    & strong {
      width: 80%;
    }

    &:hover {
      opacity: 0.8;
      background-position: 10px -489px !important;
    }

    &:disabled {
      opacity: 0.4;
      background-position: 10px -489px !important;
    }
  }

  button {
    color: var(--purple-primary);
    svg {
      color: var(--purple-primary);
    }
  }
`
