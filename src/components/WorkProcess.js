import React from 'react';
import styled from 'styled-components';

import WorkStep from './WorkStep';
import WorkProcessSteps from './WorkProcessSteps';

const HelpText = styled.p`
  margin-top: 1.5rem;
  font-size: 24px;
  line-height: 2.5rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
`;

class WorkProcess extends React.Component {
  render() {
    const { home, work } = this.props;
    return (
      <section className="section" id="work-process">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter is-hidden-mobile">
              <h1 className="title has-text-centered">
                {home.homeSecondaryTitle}
              </h1>
              <HelpText className="has-text-centered">
                {home.homeSecondarySubtitle}
              </HelpText>
            </div>
            <div className="column is-half is-hidden-tablet">
              <h1 className="title is-size-4-mobile has-text-centered">
                {home.homeSecondaryTitle}
              </h1>
              <HelpText className="has-text-centered">
                {home.homeSecondarySubtitle}
              </HelpText>
            </div>
          </div>
          <div className="columns">
            <WorkProcessSteps work={work} />
          </div>
        </div>
      </section>
    );
  }
}

export default WorkProcess;
