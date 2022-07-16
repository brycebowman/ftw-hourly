import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import waitressImage from './images/fastfoodworker.jpeg';
import css from './SectionBanner.module.css';
import { NamedLink } from '../../components';

const SectionBanner = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionBanner.title" />
        <NamedLink name="MarketsPage" className={css.link}>
          <FormattedMessage id="SectionBanner.toMarketsPage" />
        </NamedLink>
      </div>
    </div>
  );
};

SectionBanner.defaultProps = {
  rootClassName: null,
  className: null,
  currentUserListing: null,
  currentUserListingFetched: false,
};

SectionBanner.propTypes = {
  rootClassName: string,
  className: string,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,
};

export default SectionBanner;
