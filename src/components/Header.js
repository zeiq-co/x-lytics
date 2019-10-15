/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Section = styled.section`
  padding: 1rem 1.5rem;
  @media screen and (max-width: 768px) {
    padding: 1rem 1rem;
  }
  font-family: ${props => props.theme.primaryFontFamily};
  .navbar {
    background-color: ${props => props.theme.backgroundColor};
  }
  .navbar-brand {
    margin-right: 20px;
    .navbar-item img {
      max-height: 3.75rem;
    }
  }
  .navbar-item :hover {
    background-color: ${props => props.theme.backgroundColor} !important;
  }
  .navber-item :focus :active {
    background-color: transparent;
  }
  .navbar-menu {
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-item {
    font-weight: 700;
    font-size: 1.2rem;
    :hover {
      color: ${props => props.theme.darkAccent};
    }
  }
  .navbar-burger {
    background-color: #1c1323;
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
`;

const AnchorStyled = styled(AnchorLink)`
  :focus-within {
    background-color: #fff !important;
    color: #000 !important;
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  componentDidMount() {
    if (typeof window !== `undefined`) {
      const SmoothScroll = require('smooth-scroll');
      const scroll = new SmoothScroll('a[href*="#"]');
    }
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;
    return (
      <Section className="section">
        <div className="container">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img src="/images/x.svg" alt="x-lytics logo" />
              </Link>
              <a
                href="#"
                role="button"
                className={
                  isActive
                    ? 'navbar-burger burger mobile is-active'
                    : 'navbar-burger burger mobile'
                }
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={() => this.handleMobileMenu()}>
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
              <div className="navbar-end">
                <AnchorStyled href="#work-process" className="navbar-item">
                  Design Sprints
                </AnchorStyled>
                <AnchorStyled href="#our-work" className="navbar-item">
                  Training
                </AnchorStyled>
                <AnchorStyled href="#guide-info" className="navbar-item">
                  About
                </AnchorStyled>
                <AnchorStyled href="#contact-view" className="navbar-item">
                  Blog
                </AnchorStyled>
                {/* <div className="navbar-item">
                  <div className="buttons">
                    <AnchorStyled
                      href="#contact"
                      className="button is-rounded is-medium is-primary">
                      Contact Us
                    </AnchorStyled>
                  </div>
              </div> */}
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}
