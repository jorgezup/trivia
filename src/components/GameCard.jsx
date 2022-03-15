/* eslint-disable react/no-danger */
import { arrayOf, string, shape } from 'prop-types';
import React from 'react';
import { GrFormNext } from 'react-icons/gr';
import { GiSpeaker, GiSpeakerOff } from 'react-icons/gi';
import Button from './Button';
import GameWrapper from '../styles/elements/GameWrapper';
import StyledProgress from '../styles/elements/StyledProgress';
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
  stopSound,
  isPlaying,
}) => {
  const styles = {
    default: {
      color: 'white',
    },
    setStyle: (option) => ({
      color:
        correctOption === option
          ? 'var(--green-primary)'
          : 'var(--red-primary)',
    }),
  };

  const createMarkup = (html) => ({
    __html: html,
  });

  return (
    <GameWrapper>
      <StyledProgress value={ seconds } max="30" />
      <QuestionTitleSection>
        <p
          data-testid="question-category"
          dangerouslySetInnerHTML={ createMarkup(currQuestion.category) }
        />
        <p
          data-testid="question-text"
          dangerouslySetInnerHTML={ createMarkup(currQuestion.question) }
        />
        <button
          type="button"
          isPlaying={ isPlaying }
          onClick={ stopSound }
          style={ isPlaying ? { color: 'white' } : { color: 'red !important' } }
        >
          {isPlaying ? <GiSpeaker /> : <GiSpeakerOff />}

        </button>
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
              isAlreadyAnswer ? styles.setStyle(option) : styles.default
            }
            disabled={ isOptionsDisabled }
          >
            { option }
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
