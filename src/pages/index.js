import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import KeyFeature from 'sections/key-feature';
import CoreFeature from 'sections/core-feature';
import PartnerSection from 'sections/partner';
import TestimonialCard from 'sections/testimonial';
 import Package from 'sections/package';
import Faq from 'sections/faq';
import OurProjects from 'sections/our-projects';
import WhatWeDo from 'sections/what-we-do';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing 004" />
          <Banner />
          <KeyFeature />
          <WhatWeDo />
          <OurProjects />
          <CoreFeature />
          <TestimonialCard />
          
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
