import { shape, number } from 'prop-types';
import React from 'react';
import { FaGamepad, FaMedal } from 'react-icons/fa';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { EXPIRED_TOKEN_CODE as MIN_NUMBER_OF_ASSERTIONS } from '../utils/constants';
import { SectionScore, SectionButtons } from '../styles/elements/StyledFeedback';
import Title from '../styles/elements/Title';
import Layout from '../components/Layout';
import FeedbackWrapper from '../styles/elements/FeedbackWrapper';

const playAgain = ({ push }) => push('/');

const ranking = ({ push }) => push('/ranking');

const Feedback = ({ history, player }) => {
  const { assertions, score } = player;
  return (
    <Layout>
      <FeedbackWrapper>
        <Title>Feedback</Title>
        <SectionScore>
          <h2 data-testid="feedback-text">
            {assertions < MIN_NUMBER_OF_ASSERTIONS
              ? 'Could be better...'
              : 'Well Done!'}
          </h2>
          <span>Assertions</span>
          <span data-testid="feedback-total-question">{assertions}</span>
          <span>Score</span>
          <span data-testid="feedback-total-score">{score}</span>
        </SectionScore>
        <SectionButtons>
          <Button
            data-testid="btn-play-again"
            onClick={ () => playAgain(history) }
            type="button"
            value={ <FaGamepad /> }
          >
            Play Again
          </Button>
          <Button
            data-testid="btn-ranking"
            onClick={ () => ranking(history) }
            type="button"
            value={ <FaMedal /> }
          >
            Ranking
          </Button>
        </SectionButtons>
      </FeedbackWrapper>
    </Layout>
  );
};

Feedback.propTypes = {
  player: shape({
    assertions: number,
    score: number,
  }),
}.isRequired;

const mapStateToProps = ({ player }) => ({
  player,
});

export default connect(mapStateToProps)(Feedback);
