import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { OwnListingLink } from '../../components';
import hiredImage from './images/handshake.png';
import paycheckImage from './images/paycheck.gif';
import termsImage from './images/worker-terms.gif';
import closedImage from './images/closed-restaurant.gif';
import waitressImage from './images/workers.gif';
import openImage from './images/open-restaurant.gif';
import { NamedLink } from '../../components';
import css from './SectionDifferences.module.css';

const SectionDifferences = props => {
  const { rootClassName, className, currentUserListing, currentUserListingFetched } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
    <div className={css.HowItWorks}>
      <div className={css.title}>
        <FormattedMessage id="SectionDifferences.titleLineOne" />
      </div>
      <div className={css.steps}>
        <div className={css.step}>
        <img className={css.iconImage} src={termsImage} alt="Food Workers Set Their Rate" />
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionDifferences.part1Title" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
          </h2>
          <p className={css.stepText}>
            <FormattedMessage id="SectionDifferences.part1Text" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
          </p>
          <p className={css.stepText}>
          <FormattedMessage id="SectionDifferences.part1TextB" css={css.stepTitle} values={{ lineBreak: <br />, pageBreak: <p></p> }} />
          </p>
          <br />
          </div>
      <div className={css.step}>
      <img className={css.iconImage} src={hiredImage} alt="Long Term Hires" />
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionDifferences.part2Title" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
            </h2>
          <p className={css.stepText}>
            <FormattedMessage id="SectionDifferences.part2Text" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
          </p>
        </div>

        <div className={css.step}>
      <img className={css.iconImage} src={paycheckImage} alt="Lower Fees" />
      <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionDifferences.part3Title" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
          </h2>
          <p className={css.stepText}>
            <FormattedMessage id="SectionDifferences.part3Text" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
          </p>
        </div>
      </div>
        </div>
        </div>

  );
};

SectionDifferences.defaultProps = {
  rootClassName: null,
  className: null,
  currentUserListing: null,
  currentUserListingFetched: false,
};

SectionDifferences.propTypes = {
  rootClassName: string,
  className: string,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,
};

export default SectionDifferences;
