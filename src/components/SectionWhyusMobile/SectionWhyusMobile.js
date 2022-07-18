import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import waitressImage from './images/fastfoodworker.png';
import css from './SectionWhyusMobile.module.css';

const SectionWhyusMobile = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionWhyUsMobile.title" />
      </div>
      <div className={css.steps}>
        <div className={css.step}>
          <ul className={css.list}>
            <li className={css.stepText}>
              <FormattedMessage id="SectionWhyUsMobile.step1" />
            </li>
            <li className={css.stepText}>
              <FormattedMessage id="SectionWhyUsMobile.step2" />
            </li>
            <li className={css.stepText}>
              <FormattedMessage id="SectionWhyUsMobile.step3" />
            </li>
            <li className={css.stepText}>
              <FormattedMessage id="SectionWhyUsMobile.step4" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

SectionWhyusMobile.defaultProps = {
  rootClassName: null,
  className: null,
  currentUserListing: null,
  currentUserListingFetched: false,
};

SectionWhyusMobile.propTypes = {
  rootClassName: string,
  className: string,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,
};

export default SectionWhyusMobile;
