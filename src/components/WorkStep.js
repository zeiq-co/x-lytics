import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 3rem 3rem 0rem;
  @media only screen and (max-width: 1095px) and (min-width: 769px) {
    padding: 3rem 2rem 0rem;
  }
  h1 {
    margin: 3rem 0rem;
    @media only screen and (max-width: 1095px) and (min-width: 769px) {
      font-size: 1rem !important;
    }
  }
`;

const HelpText = styled.p`
  margin-top: 1.5rem;
  font-size: 18px;
  line-height: 1.8rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
  padding: 0rem 2.5rem;
  @media only screen and (max-width: 1095px) and (min-width: 769px) {
    margin-top: 0;
    font-size: 16px;
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const WorkStep = ({ img, alt, title, subtitle, btnText }) => (
  <Wrapper className="column has-text-centered">
    <img src={img} alt={alt} />
    <h1 className="title is-5">{title}</h1>
    <HelpText>{subtitle}</HelpText>
    <a className="button is-primary is-large is-fullwidth is-rounded has-text-weight-bold">
      {btnText}
    </a>
  </Wrapper>
);

export default WorkStep;
