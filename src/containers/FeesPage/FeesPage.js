import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import { TopbarContainer } from '../../containers';
import workerImage from './images/workers.gif';
import managerImage from './images/manager.gif';
import {
  Page,
  LayoutSideNavigation,
  LayoutWrapperMain,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  Footer,
  Fees,
  SectionFAQWorker,
  SectionFAQManager,
  NamedLink,
} from '../../components';
import config from '../../config';

import css from './FeesPage.module.css';

const FeesPageComponent = props => {
  const { scrollingDisabled, intl } = props;
  const { rootClassName, className, currentUserListing, currentUserListingFetched } = props;
  const classes = classNames(rootClassName || css.root, className);
  const tabs = [
    {
      text: intl.formatMessage({ id: 'HelpPage.marketsTabTitle' }),
      selected: false,
      linkProps: {
        name: 'MarketsPage',
      },
    },
    {
      text: intl.formatMessage({ id: 'HelpPage.FAQTabTitle' }),
      selected: false,
      linkProps: {
        name: 'FAQPageTab',
      },
    },
    {
      text: intl.formatMessage({ id: 'HelpPage.feesTabTitle' }),
      selected: true,
      linkProps: {
        name: 'FeesPage',
      },
    },
    {
      text: intl.formatMessage({ id: 'HelpPage.guidelinesTabTitle' }),
      selected: false,
      linkProps: {
        name: 'GuidelinesPage',
      },
    },
  ];
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'FeesPage.schemaTitle' }, { siteTitle });
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: schemaTitle,
  };
  return (
    <Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="FeesPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
        <div className={classes}>
        <div className={css.FAQ}>
          <div className={css.title}>
            <FormattedMessage id="SectionFees.title" />
          </div>
          <div className={css.steps}>
            <div className={css.step}>
              <div className={css.stepTitle}>
              <img className={css.iconImage} src={workerImage} alt="Restaurant Workers" align="center"/>
                <FormattedMessage id="SectionFees.subtitleWorker" />
                </div>
                <p className={css.subtitle}>
                  <FormattedMessage id="SectionFees.subtitleWorker2" />
                </p>
                  <p className={css.stepText}>
                    <FormattedMessage id="SectionFees.WorkerText" />
                  </p>
                  <NamedLink name="MarketsPage" className={css.link} >
                  <FormattedMessage id="SectionFees.WorkerText3" />
                  </NamedLink>
                  <p className={css.subtitle}>
                    <FormattedMessage id="SectionFees.subtitleWorker3" />
                  </p>
                  <p className={css.stepText}>
                  <FormattedMessage id="SectionFees.WorkerText2" />
                  </p>
          <br/>
          <br/>
            </div>
            <div className={css.stepright}>
              <div className={css.stepTitle}>
              <img className={css.iconImage} src={managerImage} alt="Restaurant Managers" align="center"/>
                <FormattedMessage id="SectionFees.subtitleManager" />
                </div>
                <p className={css.subtitle}>
                  <FormattedMessage id="SectionFees.subtitleManager2" />
                </p>
                  <p className={css.stepText}>
                    <FormattedMessage id="SectionFees.ManagerText" />
                  </p>
            </div>
            </div>
            <div className={css.steps}>
              <div className={css.step}>
                <a href="/l/new"
                className={css.howitworksButton}
              >
                <FormattedMessage id="SectionHowItWorks.joinButton" />
                </a>
                </div>
                <div className={css.stepMiddle}>
                </div>
            <div className={css.step}>
                <NamedLink
                  name="SearchPage"
                  to={{
                    search:
                      'address=United%20States%20of%20America&bounds=71.540724%2C-66.885444%2C18.765563%2C-179.9',
                  }}

                  className={css.howitworksButton}
                >
                  <FormattedMessage id="SectionHowItWorks.browseButton" />
                </NamedLink>
              </div>
            </div>
            </div>
            </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSideNavigation>
    </Page>
  );
};

const { bool } = PropTypes;

FeesPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const FeesPage = compose(
  connect(mapStateToProps),
  injectIntl
)(FeesPageComponent);

export default FeesPage;
