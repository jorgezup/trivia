/* eslint-disable react/prop-types */
import React from 'react';
import Container from '../styles/elements/Layout';
import Header from './Header';
import MainWrapper from '../styles/elements/MainWrapper';
import Footer from './Footer';

const Layout = ({ children }) => (
  <Container>
    <Header />
    <MainWrapper>{children}</MainWrapper>
    <Footer />
  </Container>
);

export default Layout;
