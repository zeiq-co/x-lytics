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

const OurWork = () => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <h1 className="title is-2 has-text-centered">
            Which means we build lots of cool stuff for our partners.
          </h1>
          <HelpText className=" has-text-centered">
            We build things other agencies wouldn’t dare to on the web, iOS,
            Android, Voice and anything else that runs code!
          </HelpText>
        </div>
      </div>
      <div className="columns is-centered">
        <WorkFeature img={web} alt="Web apps" title="Web" />
        <WorkFeature img={mobile} alt="mobile apps" title="Mobile" />
        <WorkFeature img={voice} alt="Voice" title="Voice" />
        <WorkFeature img={entertainment} alt="games" title="Entertainment" />
      </div>
    </div>
  </section>
);

export default OurWork;
