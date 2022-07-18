import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import closedImage from './images/manager-180px.gif';
import waitressImage from './images/waitress-cook-180px.gif';
import { NamedLink } from '../../components';
import css from './SectionHowItWorksMobile.module.css';

const SectionHowItWorksMobile = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionHowItWorksNew.titleLineOne" />
      </div>
      <div className={css.steps}>
        <div className={css.step}>
          <img className={css.iconImage} src={waitressImage} alt="Cafe Icon" />
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorksMobile.WorkerTitle" />
          </h2>
        </div>
        <div className={css.stepMiddle}></div>
        <div className={css.step}>
          <img className={css.iconImage} src={closedImage} alt="Closed Restaurant" />
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorksMobile.ManagerTitle" />
          </h2>
        </div>
      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <p className={css.subtitle}>
            <FormattedMessage id="SectionHowItWorksMobile.WorkerSubtitle1" />
          </p>
          <p className={css.stepText}>
            <FormattedMessage id="SectionHowItWorksMobile.WorkerText1" />
          </p>
        </div>
        <div className={css.stepMiddle}>
          <div className={css.numberImage} align="center">
            1.
          </div>
        </div>
        <div className={css.step}>
          <p className={css.subtitle}>
            <FormattedMessage id="SectionHowItWorksMobile.ManagerSubtitle1" />
          </p>
          <p className={css.stepTextRight}>
            <FormattedMessage id="SectionHowItWorksMobile.ManagerText1" />
          </p>
        </div>
      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <p className={css.subtitle}>
            <FormattedMessage id="SectionHowItWorksMobile.WorkerSubtitle2" />
          </p>
          <p className={css.stepText}>
            <FormattedMessage id="SectionHowItWorksMobile.WorkerText2" />
          </p>
        </div>
        <div className={css.stepMiddle}>
          <div className={css.numberImage} align="center">
            2
          </div>
        </div>
        <div className={css.step}>
          <p className={css.subtitle}>
            <FormattedMessage id="SectionHowItWorksMobile.ManagerSubtitle2" />
          </p>
          <p className={css.stepTextRight}>
            <FormattedMessage id="SectionHowItWorksMobile.ManagerText2" />
          </p>
        </div>
      </div>
      <div className={css.steps}>
        <div className={css.step}>
          <p className={css.subtitle}>
            <FormattedMessage id="SectionHowItWorksMobile.WorkerSubtitle3" />
          </p>
          <p className={css.stepText}>
            <FormattedMessage id="SectionHowItWorksMobile.WorkerText3" />
          </p>
        </div>

        <div className={css.stepMiddle}>
          <div className={css.numberImage} align="center">
            3.
          </div>
        </div>
        <div className={css.step}>
          <p className={css.subtitle}>
            <FormattedMessage id="SectionHowItWorksMobile.ManagerSubtitle3" />
          </p>
          <p className={css.stepTextRight}>
            <FormattedMessage id="SectionHowItWorksMobile.ManagerText3" />
          </p>
        </div>
      </div>
      <div className={css.steps}>
        <div className={css.step}>
          <p className={css.subtitle}>
            <FormattedMessage id="SectionHowItWorksMobile.WorkerSubtitle4" />
          </p>
          <p className={css.stepText}>
            <FormattedMessage id="SectionHowItWorksMobile.WorkerText4" />
          </p>
        </div>
        <div className={css.stepMiddle}>
          <div className={css.numberImage} align="center">
            4.
          </div>
        </div>
        <div className={css.step}>
          <p className={css.subtitle}>
            <FormattedMessage id="SectionHowItWorksMobile.ManagerSubtitle4" />
          </p>
          <p className={css.stepTextRight}>
            <FormattedMessage id="SectionHowItWorksMobile.ManagerText4" />
          </p>
        </div>
      </div>
      <div className={css.steps}>
        <div className={css.step}>
          <p className={css.subtitleLast}>
            <FormattedMessage id="SectionHowItWorksMobile.WorkerSubtitle5" />
          </p>
        </div>
        <div className={css.stepMiddle}>
          <div className={css.numberImage} align="center">
            5.
          </div>
        </div>
        <div className={css.step}>
          <p className={css.subtitleLast}>
            <FormattedMessage id="SectionHowItWorksMobile.ManagerSubtitle5" />
          </p>
        </div>
      </div>

      <div className={css.steps}>
        <div className={css.step} align="center">
          <a href="/l/new" className={css.howitworksButton}>
            <FormattedMessage id="SectionHowItWorks.joinButton" />
          </a>
        </div>
        <div className={css.stepMiddle}></div>
        <div className={css.step} align="center">
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
  );
};

SectionHowItWorksMobile.defaultProps = {
  rootClassName: null,
  className: null,
  currentUserListing: null,
  currentUserListingFetched: false,
};

SectionHowItWorksMobile.propTypes = {
  rootClassName: string,
  className: string,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,
};

export default SectionHowItWorksMobile;
