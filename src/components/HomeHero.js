import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Section = styled.section`
  .columns {
    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
      display: flex;
    }
  }
  .column:last-child {
    align-self: center;
    @media screen and (max-width: 768px) {
      justify-content: center;
      display: flex;
    }
  }
  h1 {
    margin-bottom: 1rem;
  }
  img {
    width: 75%;
  }
`;

const HelpText = styled.p`
  margin-top: 1.5rem;
  font-size: 28px;
  line-height: 2.5rem;
  font-weight: 400;
  margin-bottom: 2.5rem;
`;

class HomeHero extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <Section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <section className="hero is-medium">
                <div className="hero-body">
                  <h1 className="title is-size-4-mobile">
                    {home.homePrimaryTitle}
                  </h1>
                  <HelpText className="is-size-5-mobile">
                    {home.homePrimarySubtitle}
                  </HelpText>
                  <AnchorLink
                    href="#contact"
                    className="button is-primary is-medium is-rounded has-text-weight-bold">
                    {home.homePrimaryButton}
                  </AnchorLink>
                </div>
              </section>
            </div>
            <div className="column">
              <img src={home.homePrimaryImage.file.url} alt="Mobile" />
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default HomeHero;
