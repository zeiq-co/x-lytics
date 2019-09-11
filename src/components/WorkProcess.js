import React from 'react';
import styled from 'styled-components';

import WorkStep from './WorkStep';

const Section = styled.section`
  .first {
    @media only screen and (max-width: 600px) {
      padding: 0rem !important;
    }
  }
`;

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
      <Section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter first">
              <h1 className="title is-size-3-mobile has-text-centered">
                {home.homeSecondaryTitle}
              </h1>
              <HelpText className="has-text-centered">
                {home.homeSecondarySubtitle}
              </HelpText>
            </div>
          </div>
          <div className="columns">
            {work.map(item => (
              <WorkStep
                key={item.node.id}
                img={item.node.icon.file.url}
                title={item.node.title}
                subtitle={item.node.subtitle}
                btnText={item.node.buttonText}
              />
            ))}
          </div>
        </div>
      </Section>
    );
  }
}

export default WorkProcess;
