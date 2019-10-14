import React from 'react';

import WorkStep from './WorkStep';

class WorkProcessSteps extends React.Component {
  render() {
    const { work } = this.props;
    return (
      <div className="columns">
        {work.map(item => (
          <WorkStep
            work={item.node}
            key={item.node.id}
            img={item.node.icon.file.url}
            title={item.node.title}
            subtitle={item.node.subtitle}
            // btnText={item.node.buttonText}
          />
        ))}
      </div>
    );
  }
}

export default WorkProcessSteps;
