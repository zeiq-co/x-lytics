import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
      <Section className="section" id="contact-view">
        <div className="container">
          <div className="columns">
            <div className="column is-4">
              <figure className="image is-128x128 is-pulled-right is-hidden-mobile">
                <img
                  className="is-rounded"
                  src={contact.contactImage.file.url}
                  alt="avatar"
                />
              </figure>
            </div>
            <div className="column is-4 is-hidden-tablet">
              <figure className="image">
                <img
                  className="is-rounded"
                  src={contact.contactImage.file.url}
                  alt="avatar"
                />
              </figure>
            </div>
            <div className="column is-6">
              <h1 className="title is-size-3-mobile">{contact.contactTitle}</h1>
              <p className="is-size-5">
                {contact.contactSubtitle.contactSubtitle}
              </p>
              <p className="is-size-5">
                {contact.contactDetails}{' '}
                <Link to="/" className="has-text-weight-bold">
                  contact us.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default ContactView;
