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
  Markets,
  SectionFAQWorker,
  SectionFAQManager,
  NamedLink,
} from '../../components';
import config from '../../config';

import css from './MarketsPage.module.css';

const MarketsPageComponent = props => {
  const { scrollingDisabled, intl } = props;
  const { rootClassName, className, currentUserListing, currentUserListingFetched } = props;
  const classes = classNames(rootClassName || css.root, className);
  const tabs = [
    {
      text: intl.formatMessage({ id: 'HelpPage.marketsTabTitle' }),
      selected: true,
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
  const schemaTitle = intl.formatMessage({ id: 'LaunchPage.schemaTitle' }, { siteTitle });
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: schemaTitle,
  };
  return (
    <Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="MarketsPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
        <Markets />
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSideNavigation>
    </Page>
  );
};

const { bool } = PropTypes;

MarketsPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const MarketsPage = compose(
  connect(mapStateToProps),
  injectIntl
)(MarketsPageComponent);

export default MarketsPage;
