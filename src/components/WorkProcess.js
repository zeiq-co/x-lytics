import React from 'react';
import styled from 'styled-components';

import WorkStep from './WorkStep';
import ideaImg from '../../static/images/xlytics/ideas.png';
import rocketImg from '../../static/images/xlytics/rocket.png';
import core from '../../static/images/xlytics/core.png';

const HelpText = styled.p`
  margin-top: 1.5rem;
  font-size: 24px;
  line-height: 2.5rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
`;

class WorkProcess extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <h1 className="title is-2 has-text-centered">
                {home.homeSecondaryTitle}
              </h1>
              <HelpText className=" has-text-centered">
                {home.homeSecondarySubtitle}
              </HelpText>
            </div>
          </div>
          <div className="columns">
            <WorkStep
              img={ideaImg}
              alt="Ideas"
              title="Validate Ideas"
              subtitle="We use the Design Sprint to validate ideas before wasting time and money on them."
              btnText="Design Sprints"
            />
            <WorkStep
              img={rocketImg}
              alt="Build Products"
              title="Build digital products"
              subtitle="Unlike a lot of agencies; we don't just design stuff. We build whatever needs to be built."
              btnText="Development"
            />
            <WorkStep
              img={core}
              alt="Our Methods"
              title="Teach our methods"
              subtitle="We train consultants, product teams and other agencies on how to use our methods."
              btnText="Training"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default WorkProcess;
