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
            const { contentfulHome: home, allContentfulWorkItem: work } = data;
            return (
              <React.Fragment>
                <Header />
                <HomeHero home={home} />
                <WorkProcess home={home} work={work.edges} />
                <OurWork home={home} />
                <GuideInfo home={home} />
                <ContactView />
              </React.Fragment>
            );
          }}
        />
      </Layout>
    );
  }
}
