import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  p {
    margin: 2rem 4rem 3rem 0rem;
    line-height: 2.5rem;
  }
`;

class ContactView extends React.Component {
  render() {
    const { contact } = this.props;
    return (
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
              <h1 className="title is-2">{contact.contactTitle}</h1>
              <p className="is-size-5">
                {contact.contactSubtitle.contactSubtitle}
              </p>
              <p className="is-size-5">
                {contact.contactDetails}{' '}
                <a className="has-text-weight-bold">contact us.</a>
              </p>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default ContactView;
