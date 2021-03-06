import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import FooterHeading from './FooterHeading';

const Section = styled.section`
  background-color: ${props => props.theme.darkShades};
  color: ${props => props.theme.lightShades} !important;
  .title {
    color: ${props => props.theme.lightShades} !important;
  }
  .footer {
    background-color: ${props => props.theme.darkShades};
    padding: 3rem 1.5rem 3rem;
    .content {
      margin-top: 3rem;
      p {
        color: ${props => props.theme.lightShades} !important;
      }
    }
  }
  ul {
    li {
      margin-bottom: 1.2rem;
    }
  }
  a {
    :hover {
      color: #fff;
    }
  }
  .margin {
    margin-right: 3rem;
  }
  .space {
    margin: 3rem 0rem 3rem 0rem;
  }
`;

const PolicyWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  @media screen and (max-width: 768px) {
    display: grid;
  }
  .has-text-weight-bold {
    @media screen and (max-width: 768px) {
      margin: 1.2rem 0rem;
    }
  }
`;

const Navigation = styled.div`
  display: grid;
  margin-top: 2rem;
  a {
    margin: 1.2rem 0rem;
  }
`;

const InfoContainer = styled.div`
  padding: 2rem 10rem;
  @media only screen and (max-width: 1095px) and (min-width: 769px) {
    padding: 2rem 4rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Icons = styled.div`
  .icon {
    color: ${props => props.theme.lightShades} !important;
    font-size: 1.7rem;
    margin-right: 10px;
  }
`;

const NavItems = [
  { id: 1, name: 'Design Sprints', url: '/page/design-sprints' },
  {
    id: 2,
    name: 'Design Sprint Training',
    url: '/page/design-sprint-training',
  },
  { id: 3, name: 'About', url: '/page/about' },
];

class Footer extends React.Component {
  render() {
    const { contact } = this.props;
    return (
      <Section className="section">
        <div className="container">
          <footer className="footer">
            <div className="columns">
              <div className="column is-5">
                <h1 className="title is-1 is-size-3-mobile">
                  {contact.footerHeading}
                </h1>
                <FooterHeading heading="NEW BUSINESS" size />
                <a href={`mailto:${contact.email}`} className="is-size-4">
                  {contact.emailAddress}
                </a>
                <FooterHeading heading="PHONE" size />
                <a href={`tel:${contact.telephone}`} className="is-size-4">
                  {contact.phoneNumber}
                </a>
                <FooterHeading heading="ADDRESS" size />
                <h3 className="title is-4 is-size-5-mobile">
                  {contact.adressOne}
                </h3>
                <FooterHeading heading="ADDRESS" size />
                <h3 className="title is-4 is-size-5-mobile">
                  {contact.addressTwo}
                </h3>
              </div>
              <InfoContainer className="column">
                {/* <FooterHeading heading="SOCIAL" size />
                <Icons>
                  <a
                    target="_blank"
                    // href={contact.instagramLink}
                    rel="noopener noreferrer">
                    <span className="icon has-text-info">
                      <i className="fab fa-instagram" />
                    </span>
                  </a>
                  <a
                    target="_blank"
                    // href={contact.twitterLink}
                    rel="noopener noreferrer">
                    <span className="icon has-text-info">
                      <i className="fab fa-twitter-square" />
                    </span>
                  </a>
                    </Icons> */}
              </InfoContainer>
            </div>
          </footer>
        </div>
      </Section>
    );
  }
}

export default Footer;
