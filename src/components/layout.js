import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'
import GlobalStyle from './global-styles'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 750px;
  min-height: 100vh;
  padding: 1rem;
`

const StyledContent = styled.div`
  flex-grow: 1;
`

export default function Layout(props) {
  const { children } = props
  return (
    <StyledContainer>
      <GlobalStyle />
      <StyledContent>
        <Header />
        {children}
      </StyledContent>
      <Footer />
    </StyledContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
