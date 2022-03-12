import { shape, func } from 'prop-types';
import React, { Component } from 'react';
import { FaHome } from 'react-icons/fa';
import Button from '../components/Button';
import { getRankingFromLocalStorage } from '../services/localStorage/ranking';
import { formatUrl } from '../utils/helpers';

class Ranking extends Component {
  state = {
    ranking: [],
  };

  componentDidMount() {
    const ranking = getRankingFromLocalStorage();
    this.setState({ ranking });
  }

  goHome = ({ push }) => push('/');

  render() {
    const { history } = this.props;
    const { ranking } = this.state;
    console.log(ranking);
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <Button
          data-testid="btn-go-home"
          onClick={ () => this.goHome(history) }
          type="button"
          value={ <FaHome /> }
        />
        <ol>
          {ranking
            .sort((a, b) => b.score - a.score)
            .map(({ name, score, picture }, index) => (
              <li key={ picture }>
                <img src={ formatUrl(picture) } alt="profile" />
                <span data-testid={ `player-name-${index}` }>{name}</span>
                <span data-testid={ `player-score-${index}` }>{score}</span>
              </li>
            ))}
        </ol>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: shape({
    push: func,
  }),
}.isRequired;

export default Ranking;
