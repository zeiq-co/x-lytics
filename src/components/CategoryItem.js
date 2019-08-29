import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  box-shadow: none;
  transition: box-shadow 0.2s ease;
  padding: 1rem 0.75rem;
  :hover {
    box-shadow: ${props => props.theme.boxShadow};
  }
  .image {
    margin: 0 auto;
  }
`;

const CategoryItem = () => (
  <Container className="column is-one-fifth">
    <figure className="image is-96x96">
      <img
        className="is-rounded "
        src="https://bulma.io/images/placeholders/1280x960.png"
        alt="Placeholder"
      />
    </figure>
    <h5 className="has-text-centered has-text-weight-semibold is-size-5">
      Category Name
    </h5>
  </Container>
);

export default CategoryItem;
