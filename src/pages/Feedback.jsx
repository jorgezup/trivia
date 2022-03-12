import { shape, number } from 'prop-types';
import React from 'react';
import { FaGamepad } from 'react-icons/fa';
import { connect } from 'react-redux';
import Button from '../components/Button';
import Header from '../components/Header';
import { EXPIRED_TOKEN_CODE as MIN_NUMBER_OF_ASSERTIONS } from '../utils/constants';

const playAgain = ({ push }) => push('/');

const ranking = ({ push }) => push('/ranking');

const Feedback = ({ history, player }) => {
  const { assertions, score } = player;
  return (
    <div>
      <h1>Feedback</h1>
      <p data-testid="feedback-text">
        {assertions < MIN_NUMBER_OF_ASSERTIONS
          ? 'Could be better...'
          : 'Well Done!'}
      </p>
      <Header />
      <p data-testid="feedback-total-question">{assertions}</p>
      <p data-testid="feedback-total-score">{score}</p>
      <Button
        data-testid="btn-play-again"
        onClick={ () => playAgain(history) }
        type="button"
        value={ <FaGamepad /> }
      />
      <Button
        data-testid="btn-ranking"
        onClick={ () => ranking(history) }
        type="button"
        value="Ranking"
      />
    </div>
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
