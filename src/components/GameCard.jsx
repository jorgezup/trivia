import { arrayOf, string, shape } from 'prop-types';
import React from 'react';
import Button from './Button';

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
      border: '1px solid black',
    },
    handleBorder: (option) => ({
      border:
        correctOption === option
          ? '3px solid rgb(6, 240, 15)'
          : '3px solid rgb(255, 0, 0)',
    }),
  };

  return (
    <section>
      <h1>{seconds}</h1>
      <p data-testid="question-category">{currQuestion.category}</p>
      <p data-testid="question-text">{currQuestion.question}</p>
      <section data-testid="answer-options">
        {shuffledOptions.map((option, index) => (
          <Button
            key={ index }
            type="button"
            value={ option }
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
          />
        ))}
      </section>
      {isAlreadyAnswer && (
        <Button
          type="button"
          onClick={ handleNextQuestionClick }
          value="Next"
          data-testid="btn-next"
        />
      )}
    </section>
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
