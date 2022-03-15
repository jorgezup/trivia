import { bool, string, func, arrayOf, object } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestionsThunk } from '../actions/game';
import GameCard from '../components/GameCard';
import Loading from '../components/Loading';
import { calculateQuestionScore, shuffleArray } from '../utils/helpers';
import { DECREASE_TIME, TOTAL_TIME } from '../utils/constants';
import { updatePlayerStatsAction } from '../actions/player';
import { saveRankingInLocalStorage } from '../services/localStorage/ranking';
import Layout from '../components/Layout';

class Game extends Component {
  state = {
    isAlreadyAnswer: false,
    seconds: 30,
    isOptionsDisabled: false,
    currentIndex: 0,
    shuffledOptions: [],
    incorrectOptions: [],
    currQuestion: {},
  }

  async componentDidMount() {
    const { getQuestions } = this.props;
    await getQuestions();
    this.startGame();
  }

  componentDidUpdate(_prevProps, prevState) {
    const { currentIndex } = this.state;
    if (currentIndex !== prevState.currentIndex) {
      clearTimeout(this.timeOut);
      this.startGame();
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    clearTimeout(this.timeOut);
  }

  shuffleCurrentQuestion = () => {
    const { currentIndex } = this.state;
    const {
      game: { questions },
    } = this.props;
    const currQuestion = questions[currentIndex];
    const correctOption = currQuestion.correct_answer;
    const options = [correctOption, ...currQuestion.incorrect_answers];
    const shuffledOptions = shuffleArray(options);
    const incorrectOptions = shuffledOptions
      .filter((option) => currQuestion.incorrect_answers.includes(option));

    this.setState({
      correctOption,
      shuffledOptions,
      incorrectOptions,
      currQuestion,
    });
  }

  decrementTime = () => {
    const { seconds } = this.state;
    if (seconds > 0) {
      this.setState({
        seconds: seconds - 1,
      });
    } else {
      clearInterval(this.timer);
    }
  }

  disableOptionButton = () => {
    this.timeOut = setTimeout(() => {
      this.setState({ isOptionsDisabled: true, isAlreadyAnswer: true });
    }, TOTAL_TIME);
  }

  setTimer = () => {
    this.timer = setInterval(() => {
      this.decrementTime();
    }, DECREASE_TIME);
  }

  onPause = () => {
    clearInterval(this.timer);
  }

  handleOptionClick = (option) => {
    const { seconds, correctOption, currQuestion } = this.state;
    this.onPause();
    if (correctOption === option) {
      const { updatePlayerStats } = this.props;
      const { difficulty } = currQuestion;
      const questionScore = calculateQuestionScore(seconds, difficulty);
      updatePlayerStats(questionScore);
    }
    this.setState({ isAlreadyAnswer: true, isOptionsDisabled: true });
  };

  handleNextQuestionClick = () => {
    const { currentIndex } = this.state;
    const {
      history,
      player: { name, score, gravatarEmail },
      settings: { amount },
    } = this.props;
    if (currentIndex + 1 < amount) {
      this.setState({
        currentIndex: currentIndex + 1,
        seconds: 30,
        isAlreadyAnswer: false,
        isOptionsDisabled: false,
      });
    } else {
      saveRankingInLocalStorage({ name, score, picture: gravatarEmail });
      history.push('/feedback');
    }
  }

  startGame = () => {
    this.shuffleCurrentQuestion();
    this.setTimer();
    this.disableOptionButton();
  }

  render() {
    const {
      game: { isFetching, error, questions },
    } = this.props;
    return (
      <Layout>
        {error && <div>{error}</div>}
        {isFetching && <Loading />}
        {questions.length > 0 && (
          <GameCard
            { ...this.state }
            handleOptionClick={ this.handleOptionClick }
            handleNextQuestionClick={ this.handleNextQuestionClick }
          />
        )}
      </Layout>
    );
  }
}

Game.propTypes = {
  getQuestions: func,
  updatePlayerStats: func,
  isFetching: bool,
  error: string,
  questions: arrayOf(object),
}.isRequired;

const mapStateToProps = ({ player, game, settings }) => ({
  player,
  game,
  settings,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: () => dispatch(getQuestionsThunk()),
  updatePlayerStats: (questionScore) => dispatch(updatePlayerStatsAction(questionScore)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
