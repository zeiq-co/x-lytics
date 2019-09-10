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
    const { home, ourWork } = this.props;
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
            {ourWork.map(item => (
              <WorkFeature
                key={item.node.id}
                img={item.node.image.file.url}
                title={item.node.title}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default OurWork;
