import React from 'react';
import styled from 'styled-components';

import WorkFeature from './WorkFeature';
import web from '../../static/images/xlytics/web.png';
import mobile from '../../static/images/xlytics/mobile.png';
import voice from '../../static/images/xlytics/speaker.png';
import entertainment from '../../static/images/xlytics/enter.png';

const HelpText = styled.p`
  margin-top: 1.5rem;
  font-size: 24px;
  line-height: 2.5rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
`;

class OurWork extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <h1 className="title is-2 has-text-centered">{home.workTitle}</h1>
              <HelpText className=" has-text-centered">
                {home.workSubtitle}
              </HelpText>
            </div>
          </div>
          <div className="columns is-centered">
            <WorkFeature img={web} alt="web apps" title="Web" />
            <WorkFeature img={mobile} alt="mobile apps" title="Mobile" />
            <WorkFeature img={voice} alt="voice" title="Voice" />
            <WorkFeature
              img={entertainment}
              alt="games"
              title="Entertainment"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default OurWork;
