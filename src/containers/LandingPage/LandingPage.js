import React from 'react';
import { bool, object } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { injectIntl, intlShape } from '../../util/reactIntl';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import { propTypes } from '../../util/types';
import config from '../../config';
import {
  Page,
  SectionBanner,
  SectionDifferences,
  SectionHero,
  SectionEndorsements,
  SectionHowItWorks,
  SectionWithCarousel,
  SectionHowItWorksNew,
  SectionHowItWorksMobile,
  SectionWhyusMobile,
  SectionFAQLanding,
    LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';
import { TopbarLandingContainer } from '../../containers';

import facebookImage from '../../assets/CafeTempsFacebook.gif';
import twitterImage from '../../assets/CafeTempsTwitter.gif';
import css from './LandingPage.module.css';

export const LandingPageComponent = props => {
  const {
    history,
    intl,
    location,
    scrollingDisabled,
    currentUserListing,
    currentUserListingFetched,
  } = props;

  // Schema for search engines (helps them to understand what this page is about)
  // http://schema.org
  // We are using JSON-LD format
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'LandingPage.schemaTitle' }, { siteTitle });
  const schemaDescription = intl.formatMessage({ id: 'LandingPage.schemaDescription' });
  const schemaImage = `${config.canonicalRootURL}${facebookImage}`;

  return (
    <Page
      className={css.root}
      scrollingDisabled={scrollingDisabled}
      contentType="website"
      description={schemaDescription}
      title={schemaTitle}
      facebookImages={[{ url: facebookImage, width: 1200, height: 630 }]}
      twitterImages={[
        { url: `${config.canonicalRootURL}${twitterImage}`, width: 600, height: 314 },
      ]}
      schema={{
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        description: schemaDescription,
        name: schemaTitle,
        image: [schemaImage],
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
        <SectionBanner />
          <TopbarLandingContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>
          <div className={css.heroContainer}>
            <SectionHero className={css.hero} history={history} location={location} />
          </div>
          <ul className={css.sections}>
          <li className={css.section}>
            <div className={css.sectionContent}>
              <div className={css.LogoCarousel}>
              <SectionEndorsements />
                </div>
            </div>
          </li>
            <li className={css.section}>
              <div className={css.sectionContent}>
                <SectionHowItWorks
                />
              </div>
            </li>
            <li className={css.section}>
              <div className={css.sectionContent}>
                <SectionWithCarousel />
              </div>
            </li>
            <li className={css.section}>
              <div className={css.sectionContent}>
                <SectionDifferences />
              </div>
            </li>
            <li className={css.section}>
              <div className={css.sectionContentFirstChild}>
                <div className={css.HowItWorksNew}>
                <SectionHowItWorksNew />
                </div>
                <div className={css.HowItWorksMobile}>
                <SectionHowItWorksMobile />
                </div>
                <SectionFAQLanding />
              </div>
            </li>
          </ul>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </Page>
  );
};

LandingPageComponent.defaultProps = {
  currentUserListing: null,
  currentUserListingFetched: false,
};

LandingPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,

  // from withRouter
  history: object.isRequired,
  location: object.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  const { currentUserListing, currentUserListingFetched } = state.user;

  return {
    scrollingDisabled: isScrollingDisabled(state),
    currentUserListing,
    currentUserListingFetched,
  };
};

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const LandingPage = compose(
  withRouter,
  connect(mapStateToProps),
  injectIntl
)(LandingPageComponent);

export default LandingPage;
