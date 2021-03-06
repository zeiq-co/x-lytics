import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import config from '../utils/config';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import WorkProcess from '../components/WorkProcess';
import OurWork from '../components/OurWork';
import GuideInfo from '../components/GuideInfo';
// import ContactView from '../components/ContactView';
import ContactHome from '../components/ContactHome';

export const indexQuery = graphql`
  query Home {
    contentfulHome {
      homePrimaryTitle
      homePrimarySubtitle
      homePrimaryButton
      homePrimaryImage {
        file {
          url
        }
      }
      homeSecondaryTitle
      homeSecondarySubtitle
      workTitle
      workSubtitle
      guideTitle
      guideSubtitle
      guideButton
      guideImage {
        file {
          url
        }
      }
      contactTitle
      contactAddress
      contactEmail
      contactNumber
    }
    allContentfulWorkItem(sort: { order: ASC, fields: listingOrder }) {
      edges {
        node {
          id
          title
          subtitle
          buttonText
          buttonUrl
          icon {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulOurWork(sort: { order: ASC, fields: listingOrder }) {
      edges {
        node {
          id
          title
          image {
            file {
              url
            }
          }
        }
      }
    }
    contentfulFooter {
      contactTitle
      contactSubtitle {
        contactSubtitle
      }
      contactDetails
      contactImage {
        file {
          url
        }
      }
    }
  }
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout hideHeader>
        <Seo
          title="Xlytics website"
          description="Xlytics"
          url={config.siteUrl}
          image={config.image}
        />

        <StaticQuery
          query={indexQuery}
          render={data => {
            const {
              contentfulHome: home,
              allContentfulWorkItem: work,
              allContentfulOurWork: ourWork,
              contentfulFooter: contact,
            } = data;
            return (
              <React.Fragment contact={contact}>
                <Header />
                <HomeHero home={home} />
                <WorkProcess home={home} work={work.edges} />
                <OurWork home={home} ourWork={ourWork.edges} />
                <GuideInfo home={home} />
                {/* <ContactView contact={contact} /> */}
                <ContactHome home={home} />
              </React.Fragment>
            );
          }}
        />
      </Layout>
    );
  }
}
