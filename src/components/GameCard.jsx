import { arrayOf, string, shape } from 'prop-types';
import React from 'react';
import { GrFormNext } from 'react-icons/gr';
import Button from './Button';
import GameWrapper from '../styles/elements/GameWrapper';
import {
  QuestionTitleSection,
  QuestionSection,
} from '../styles/elements/StyledQuestion';

const GameCard = ({
  shuffledOptions,
  incorrectOptions,
  currQuestion,
  correctOption,
  isAlreadyAnswer,
  handleOptionClick,
  seconds,
  isOptionsDisabled,
  handleNextQuestionClick,
}) => {
  const styles = {
    default: {
      border: 'none',
    },
    handleBorder: (option) => ({
      border:
        correctOption === option
          ? '3px solid rgb(6, 240, 15)'
          : '3px solid rgb(255, 0, 0)',
    }),
  };

  return (
    <GameWrapper>
      <h1>{seconds}</h1>
      <QuestionTitleSection>
        <p data-testid="question-category">{currQuestion.category}</p>
        <p data-testid="question-text">{currQuestion.question}</p>
      </QuestionTitleSection>
      <QuestionSection data-testid="answer-options">
        {shuffledOptions.map((option, index) => (
          <Button
            key={ index }
            type="button"
            value={ index + 1 }
            data-testid={
              incorrectOptions.includes(option)
                ? `wrong-answer-${incorrectOptions.indexOf(option)}`
                : 'correct-answer'
            }
            onClick={ () => handleOptionClick(option) }
            style={
              isAlreadyAnswer ? styles.handleBorder(option) : styles.default
            }
            disabled={ isOptionsDisabled }
          >
            {option}
          </Button>
        ))}
      </QuestionSection>
      {isAlreadyAnswer && (
        <Button
          type="button"
          onClick={ handleNextQuestionClick }
          value={ <GrFormNext /> }
          data-testid="btn-next"
        >
          Next
        </Button>
      )}
    </GameWrapper>
  );
};

GameCard.propTypes = {
  data: shape({
    category: string,
    correct_answer: string,
    incorrect_answers: arrayOf(string),
    question: string,
  }),
}.isRequired;

export default GameCard;
