import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const Container = styled.section`
  @media only screen and (max-width: 768px) {
    padding: 1rem 1.5rem 3rem 1.5rem;
  }

  .column {
    margin-top: 3rem;
    padding-bottom: 3rem;
  }

  .input {
    box-shadow: rgba(0, 0, 0, 0.08) 2px 2px 2px;
  }

  textarea {
    box-shadow: rgba(0, 0, 0, 0.08) 2px 2px 2px;
  }

  .button {
    transition: opacity 0.5s;
    padding: 0rem 1rem;
    :hover {
      color: #fff;
      opacity: 1;
    }
  }

  .control {
    padding: 1rem;
    :hover {
      border-color: #fff;
    }
  }

  .is-7 {
    align-self: center;
  }

  .field {
    width: 100%;
  }
`;

export default class ContactPage extends React.Component {
  handleSubmit = data => {
    // console.log('data', data);
    axios({
      method: 'post',
      url: `${config.lambdaUri}/send-email`,
      data,
    });
  };

  render() {
    const { location } = this.props;
    return (
      <Layout path={location.pathname}>
        <Seo
          title="Contact"
          description="Contact us today!"
          url={`${config.siteUrl}`}
        />
        <Container className="section">
          <div className="container">
            <div className="columns">
              <div className="column has-text-centered is-7">
                <h1 className="title is-size-4-mobile">GET IN TOUCH</h1>
                <h4 className="subtitle is-6 text">
                  ECO House, Lea Road, Waltham Abbey, Hertfordshire, EN9 1AS
                </h4>
                <h4 className="subtitle is-6 text">info@xlytics.com</h4>
                <h4 className="subtitle is-6 text">08700 777 555</h4>
              </div>
              <div className="column">
                <div className="field is-horizontal">
                  <div className="field-body">
                    <ContactForm onSubmit={this.handleSubmit} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}
