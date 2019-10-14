import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: ${props => props.theme.backgroundDark};
  .column:last-child {
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
  }
  img {
    height: auto;
    width: 40%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  p {
    margin: 2rem 4rem 3rem 0rem;
    line-height: 2.5rem;
    @media screen and (max-width: 768px) {
      margin: 3rem 0;
    }
  }
`;

class GuideInfo extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <Section className="section" id="guide-info">
        <div className="container">
          <div className="columns">
            <div className="is-offset-one-quarter column has-text-centered-mobile">
              <h1 className="title is-size-4-mobile">{home.guideTitle}</h1>
              <p className="is-size-4 has-text-centered-mobile">
                {home.guideSubtitle}
              </p>
              <a className="button is-primary is-large is-rounded has-text-weight-bold">
                {home.guideButton}
              </a>
            </div>
            <div className="column">
              <img src={home.guideImage.file.url} alt="Guide Book" />
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default GuideInfo;
