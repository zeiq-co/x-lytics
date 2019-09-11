import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

import GlobalStyle, { theme } from '../utils/theme';
import config from '../utils/config';
import Header from './Header';
import Footer from './Footer';

const query = graphql`
  query LayoutQuery {
    contentfulFooter {
      footerHeading
      footerSubheading
      companyContact
      emailAddress
      phoneNumber
      adressOne
      addressTwo
      twitterLink
      instagramLink
    }
  }
`;

const Container = styled.div`
  min-height: 90vh;
`;

const IndexLayout = ({ children, hideHeader }) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Helmet>
          <title>{config.siteName}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta description={config.description} />
        </Helmet>
        <GlobalStyle />
        <StaticQuery
          query={query}
          render={data => {
            const contact = data.contentfulFooter;
            return (
              <div>
                {!hideHeader && <Header />}
                <Container>{children}</Container>
                <Footer contact={contact} />
              </div>
            );
          }}
        />
      </React.Fragment>
    </ThemeProvider>
  );
};

IndexLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default IndexLayout;
