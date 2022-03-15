import { shape, func } from 'prop-types';
import React, { Component } from 'react';
import { FaHome } from 'react-icons/fa';
import Button from '../components/Button';
import { getRankingFromLocalStorage } from '../services/localStorage/ranking';
import { formatUrl } from '../utils/helpers';
import MainWrapper from '../styles/elements/MainWrapper';
import Title from '../styles/elements/Title';
import StyledList from '../styles/elements/StyledList';
import StyledImage from '../styles/elements/StyledImage';
import RankingWrapper from '../styles/elements/RankingWrapper';
import Layout from '../components/Layout';

class Ranking extends Component {
  state = {
    ranking: [],
  }

  componentDidMount() {
    const ranking = getRankingFromLocalStorage();
    this.setState({ ranking });
  }

  goHome = ({ push }) => push('/')

  render() {
    const { history } = this.props;
    const { ranking } = this.state;
    console.log(ranking);
    return (
      <Layout>
        <MainWrapper>
          <Title data-testid="ranking-title">Ranking</Title>
          <RankingWrapper>
            <StyledList>
              {ranking
                .sort((a, b) => b.score - a.score)
                .map(({ name, score, picture }, index) => (
                  <div key={ picture }>
                    <li>
                      <StyledImage src={ formatUrl(picture) } alt="profile" />
                      <span data-testid={ `player-name-${index}` }>{name}</span>
                      <span data-testid={ `player-score-${index}` }>{score}</span>
                    </li>
                  </div>
                ))}
            </StyledList>
            <Button
              data-testid="btn-go-home"
              onClick={ () => this.goHome(history) }
              type="button"
              value={ <FaHome /> }
            >
              Home
            </Button>
          </RankingWrapper>
        </MainWrapper>
      </Layout>
    );
  }
}

Ranking.propTypes = {
  history: shape({
    push: func,
  }),
}.isRequired;

export default Ranking;
