import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { OwnListingLink } from '../../components';
import sideHuslLogo from './images/sidehusl-logo.png';
import productHuntLogo from './images/product-hunt-logo.png';
import { NamedLink } from '../../components';
import css from './SectionEndorsements.module.css';

const SectionEndorsements = props => {
  const { rootClassName, className, currentUserListing, currentUserListingFetched } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
    <div className={css.HowItWorks}>
      <div className={css.title}>
        <FormattedMessage id="SectionEndorsements.title" />
      </div>
      <div className={css.steps}>
        <div className={css.step}>
          <a href="https://www.sidehusl.com" target="_blank">
        <img className={css.iconImage} src={sideHuslLogo} alt="Side Husl" />
        </a>
          </div>
      <div className={css.step}>
      <a href="https://www.producthunt.com" target="_blank">
      <img className={css.iconImage} src={productHuntLogo} alt="Product Hunt" />
      </a>
        </div>
      </div>
      </div>
        </div>
  );
};

SectionEndorsements.defaultProps = {
  rootClassName: null,
  className: null,
  currentUserListing: null,
  currentUserListingFetched: false,
};

SectionEndorsements.propTypes = {
  rootClassName: string,
  className: string,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,
};

export default SectionEndorsements;
