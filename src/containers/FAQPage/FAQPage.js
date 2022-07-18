import React from 'react';
import { bool, string } from 'prop-types';
import { propTypes } from '../../util/types';
import classNames from 'classnames';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  SectionFAQWorker,
  SectionFAQManager,
  Footer,
} from '../../components';

import { FormattedMessage } from '../../util/reactIntl';
import css from './FAQPage.module.css';

const FAQPage = props => {
  const { rootClassName, className, currentUserListing, currentUserListingFetched } = props;
  const classes = classNames(rootClassName || css.root, className);
  // prettier-ignore
  return (
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain className={css.mainWrapper}>
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
            </div>
            <div className={css.step}>
              <div className={css.stepTitle}>
                <FormattedMessage id="SectionFAQ.subtitleManager" />
                </div>
                <SectionFAQManager />
            </div>
            </div>
            </div>
            </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FAQPage;
