import React from 'react';
import styled from 'styled-components';

import ContactForm from './ContactForm';

const Container = styled.section`
  padding: 3rem 1.5rem 0rem 1.5rem;
  background-color: #e1eff2;

  @media only screen and (max-width: 768px) {
    padding-bottom: 3rem;
    margin-bottom: -2rem;
  }

  .columns {
    background-color: #ffffff;
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }

  .column {
    margin-top: 3rem;
    padding-bottom: 3rem;
  }

  .input {
    height: 2.5rem;
    background-color: #fff;
    border-color: #fff;
    border-radius: none;
    box-shadow: none;
    ::placeholder {
      opacity: 1;
    }
  }

  textarea {
    background-color: #fff;
    border-color: #fff;
    border-radius: none;
    box-shadow: none;
    ::placeholder {
      opacity: 1;
    }
  }

  .button {
    font-size: 1rem;
    font-weight: 400;
    transition: opacity 0.2s;
    :hover {
      color: #fff;
      opacity: 0.6;
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
`;

const Contact = () => (
  <Container id="contact" className="section">
    <div className="container">
      <div className="columns">
        <div className="column has-text-centered is-7">
          <h1 className="subtitle is-2 text">GET IN TOUCH</h1>
          <h4 className="subtitle is-6 text">
            ECO House, Lea Road, Waltham Abbey, Hertfordshire, EN9 1AS
          </h4>
          <h4 className="subtitle is-6 text">info@xlytics.com</h4>
          <h4 className="subtitle is-6 text">08700 777 555</h4>
        </div>
        <div className="column">
          <div className="field is-horizontal">
            <div className="field-body">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Contact;
