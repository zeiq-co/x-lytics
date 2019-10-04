import React from 'react';
import styled from 'styled-components';

import WorkStep from './WorkStep';

const HelpText = styled.p`
  margin-top: 1.5rem;
  font-size: 24px;
  line-height: 2.5rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
`;

class WorkProcessSteps extends React.Component {
  render() {
    const { work } = this.props;
    return (
      <section className="section">
        <div className="container">
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
      </section>
    );
  }
}

export default WorkProcessSteps;
