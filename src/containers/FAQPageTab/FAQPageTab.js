import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import { TopbarContainer } from '../../containers';
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

import css from './FAQPageTab.module.css';

const FAQPageTabComponent = props => {
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
      selected: true,
      linkProps: {
        name: 'FAQPageTab',
      },
    },
      {
      text: intl.formatMessage({ id: 'HelpPage.feesTabTitle' }),
      selected: false,
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
  const schemaTitle = intl.formatMessage({ id: 'FAQPageTab.schemaTitle' }, { siteTitle });
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: schemaTitle,
  };
  return (
    <Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="FAQPageTab" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
        <div className={classes}>
        <div className={css.FAQ}>
          <div className={css.title}>
            <FormattedMessage id="SectionFAQ.title" />
          </div>
          <div className={css.steps}>
            <div className={css.step}>
              <div className={css.stepTitle}>
                <FormattedMessage id="SectionFAQ.subtitleWorker" />
                </div>
                <SectionFAQWorker />
                <a href="/l/new"
                className={css.howitworksButton}
              >
                <FormattedMessage id="SectionHowItWorks.joinButton" />
                </a>
            </div>
            <div className={css.stepright}>
              <div className={css.stepTitle}>
                <FormattedMessage id="SectionFAQ.subtitleManager" />
                </div>
                <SectionFAQManager />
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

FAQPageTabComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const FAQPageTab = compose(
  connect(mapStateToProps),
  injectIntl
)(FAQPageTabComponent);

export default FAQPageTab;
