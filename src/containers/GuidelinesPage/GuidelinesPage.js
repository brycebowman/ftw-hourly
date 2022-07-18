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
  Guidelines,
} from '../../components';
import config from '../../config';

import css from './GuidelinesPage.module.css';

const GuidelinesPageComponent = props => {
  const { scrollingDisabled, intl } = props;

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
      selected: false,
      linkProps: {
        name: 'FeesPage',
      },
    },
    {
      text: intl.formatMessage({ id: 'GuidelinesPage.guidelinesTabTitle' }),
      selected: true,
      linkProps: {
        name: 'GuidelinesPage',
      },
    },
  ];
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'GuidelinesPage.schemaTitle' }, { siteTitle });
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: schemaTitle,
  };
  return (
    <Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="GuidelinesPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <div className={css.content}>
            <h1 className={css.title}>
              <FormattedMessage id="GuidelinesPage.heading" />
            </h1>
            <Guidelines />
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

GuidelinesPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const GuidelinesPage = compose(
  connect(mapStateToProps),
  injectIntl
)(GuidelinesPageComponent);

export default GuidelinesPage;
