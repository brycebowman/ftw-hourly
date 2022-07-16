import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { OwnListingLink } from '../../components';
import closedImage from './images/closed-restaurant.gif';
import waitressImage from './images/workers.gif';
import openImage from './images/open-restaurant.gif';
import { NamedLink } from '../../components';
import css from './SectionHowItWorks.module.css';

const SectionHowItWorks = props => {
  const { rootClassName, className, currentUserListing, currentUserListingFetched } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
    <div className={css.HowItWorks}>
      <div className={css.title}>
        <FormattedMessage id="SectionHowItWorks.titleLineOne" />
        <p></p>
        <FormattedMessage id="SectionHowItWorks.titleLineTwo" />

      </div>
      <div className={css.steps}>
        <div className={css.step}>
        <img className={css.iconImage} src={waitressImage} alt="Cafe Icon" />
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorks.part1Title" />
          </h2>
          <p className={css.stepText}>
            <FormattedMessage id="SectionHowItWorks.part1Text" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
          </p>
          <p className={css.stepText}>
          <FormattedMessage id="SectionHowItWorks.part1TextB" css={css.stepTitle} values={{ lineBreak: <br />, pageBreak: <p></p> }} />
          <FormattedMessage id="SectionHowItWorks.part1TextC" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
          </p>
          <br />
          </div>
      <div className={css.step}>
      <img className={css.iconImage} src={closedImage} alt="Closed Restaurant" />
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorks.part2Title" />
            </h2>
          <p className={css.stepText}>
            <FormattedMessage id="SectionHowItWorks.part2Text" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
          </p>
        </div>

        <div className={css.step}>
      <img className={css.iconImage} src={openImage} alt="Open Restaurant" />
      <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorks.part3Title" />
          </h2>
          <p className={css.stepText}>
            <FormattedMessage id="SectionHowItWorks.part3Text" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
          </p>
        </div>
      </div>
      <div className={css.stepsButton}>
        <div className={css.stepButton}>
        <a href="/l/new"
        className={css.howitworksButton} align='center'>
        <FormattedMessage id="SectionHowItWorks.joinButton" />
        </a>
        </div>
        <div className={css.stepButtonMiddle}>
        <p>
        </p>
        </div>

        <div className={css.stepButton}>
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
        <div className={css.stepButtonRight}>
</div>
</div>
        </div>
        </div>

  );
};

SectionHowItWorks.defaultProps = {
  rootClassName: null,
  className: null,
  currentUserListing: null,
  currentUserListingFetched: false,
};

SectionHowItWorks.propTypes = {
  rootClassName: string,
  className: string,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,
};

export default SectionHowItWorks;
