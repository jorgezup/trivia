import React from 'react'
import Container from '../styles/elements/Layout'
import Header from '../components/Header'
import MainWrapper from '../styles/elements/MainWrapper'
import Footer from '../components/Footer'
const Layout = ({children}) => {
  return (
    <Container>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </Container>
  )
}

export default Layout
