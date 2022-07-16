import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
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
  Refunds,
} from '../../components';
import config from '../../config';

import css from './RefundsPage.module.css';

const RefundsPageComponent = props => {
  const { scrollingDisabled, intl } = props;

  const tabs = [
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
      text: intl.formatMessage({ id: 'HelpPage.refundsTabTitle' }),
      selected: true,
      linkProps: {
        name: 'RefundsPage',
      },
    },
    {
      text: intl.formatMessage({ id: 'HelpPage.marketsTabTitle' }),
      selected: false,
      linkProps: {
        name: 'MarketsPage',
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
  const schemaTitle = intl.formatMessage({ id: 'RefundsPage.schemaTitle' }, { siteTitle });
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: schemaTitle,
  };
  return (
    <Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="RefundsPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <div className={css.content}>
            <h1 className={css.title}>
              <FormattedMessage id="RefundsPage.heading" />
            </h1>
            <Refunds />
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

RefundsPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const RefundsPage = compose(
  connect(mapStateToProps),
  injectIntl
)(RefundsPageComponent);

export default RefundsPage;
