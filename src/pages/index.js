import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import WorkProcess from '../components/WorkProcess';
import OurWork from '../components/OurWork';
import GuideInfo from '../components/GuideInfo';
import ContactView from '../components/ContactView';

export const indexQuery = graphql`
  query Home {
    contentfulHome {
      homePrimaryTitle
      homePrimarySubtitle
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
      guideImage {
        file {
          url
        }
      }
    }
    allContentfulWorkItem {
      edges {
        node {
          id
          title
          subtitle
          buttonText
          icon {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulOurWork {
      edges {
        node {
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
      footerHeading
      footerSubheading
      companyContact
      emailAddress
      phoneNumber
      adressOne
      addressTwo
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
                <ContactView contact={contact} />
              </React.Fragment>
            );
          }}
        />
      </Layout>
    );
  }
}
