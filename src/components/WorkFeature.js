import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  img {
    height: 40%;
    width: auto;
  }
  h1 {
    margin: 1rem;
  }
`;

const WorkFeature = ({ img, alt, title }) => (
  <Wrapper className="column has-text-centered is-one-fifth">
    <img src={img} alt={alt} />
    <h1 className="title is-4 ">{title}</h1>
  </Wrapper>
);

export default WorkFeature;
