import React from 'react';
import styled from 'styled-components';

import guide from '../../static/images/xlytics/guide.jpg';

const Section = styled.section`
  background-color: ${props => props.theme.backgroundDark};
  img {
    height: auto;
    width: 40%;
  }
  p {
    margin: 2rem 4rem 3rem 0rem;
    line-height: 2.5rem;
  }
`;

class GuideInfo extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <Section className="section">
        <div className="container">
          <div className="columns">
            <div className="is-offset-one-quarter column">
              <h1 className="title is-2">{home.guideTitle}</h1>
              <p className="is-size-4">{home.guideSubtitle}</p>
              <a className="button is-primary is-large is-rounded has-text-weight-bold">
                Download the guide
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
