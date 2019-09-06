import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  p {
    margin: 2rem 4rem 3rem 0rem;
    line-height: 2.5rem;
  }
`;

const ContactView = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-4">
          <figure className="image is-128x128 is-pulled-right">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/256x256.png"
              alt="avatar"
            />
          </figure>
        </div>
        <div className="column is-6">
          <h1 className="title is-2">Have any questions?</h1>
          <p className="is-size-5">
            If you to know more about how Sidekick can help you and your
            project, get in touch, and we'll be happy to chat.
          </p>
          <p className="is-size-5">
            You can reach Chris on +44 1553 750006 or{' '}
            <a className="has-text-weight-bold">contact us.</a>
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export default ContactView;
