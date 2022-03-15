import { string, number, shape } from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { formatUrl } from '../utils/helpers'
import HeaderContainer from '../styles/elements/StyledHeader'

const Header = ({ player }) => (
  <HeaderContainer>
    <img
      src={formatUrl(player.gravatarEmail)}
      alt='profile'
      data-testid='header-profile-picture'
    />
    <span data-testid='header-player-name'>{player.name}</span>
    <span data-testid='header-score'>{player.score}</span>
  </HeaderContainer>
)

Header.propTypes = {
  player: shape({
    gravatarEmail: string,
    name: string,
    score: number,
  }).isRequired,
}
const mapStateToProps = ({ player }) => ({
  player,
})

export default connect(mapStateToProps, null)(Header)
