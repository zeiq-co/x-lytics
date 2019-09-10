import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .title {
    font-size: 3.4rem;
    font-weight: 700;
  }
  .subtitle {
    font-size: 3.4rem;
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
                  <h1 className="title is-size-3-mobile">
                    {home.homePrimaryTitle}
                  </h1>
                  <HelpText>{home.homePrimarySubtitle}</HelpText>
                  <a className="button is-primary is-medium is-rounded has-text-weight-bold">
                    Book a Discovery Call
                  </a>
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
