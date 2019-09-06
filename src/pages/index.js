import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import WorkProcess from '../components/WorkProcess';
import OurWork from '../components/OurWork';
import GuideInfo from '../components/GuideInfo';
import ContactView from '../components/ContactView';

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
        <Header />
        <HomeHero />
        <WorkProcess />
        <OurWork />
        <GuideInfo />
        <ContactView />
      </Layout>
    );
  }
}
