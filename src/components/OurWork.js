import React from 'react';
import styled from 'styled-components';

import WorkFeature from './WorkFeature';

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
      <section className="section" id="our-work">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <h1 className="title is-size-4-mobile has-text-centered">
                {home.workTitle}
              </h1>
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
