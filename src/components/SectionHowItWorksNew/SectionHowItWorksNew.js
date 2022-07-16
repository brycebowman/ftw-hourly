import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import closedImage from './images/manager.gif';
import waitressImage from './images/workers.gif';
import { NamedLink } from '../../components';
import css from './SectionHowItWorksNew.module.css';

const SectionHowItWorksNew = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionHowItWorksNew.titleLineOne" />
      </div>
      <div className={css.steps} align="center">
        <div className={css.step}>
          <img className={css.iconImage} src={waitressImage} alt="Cafe Icon" />
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorksNew.WorkerTitle" />
          </h2>
        </div>
        <div className={css.stepMiddle}></div>
        <div className={css.step}>
          <img className={css.iconImage} src={closedImage} alt="Closed Restaurant" />
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorksNew.ManagerTitle" />
          </h2>
        </div>
      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <p className={css.subtitle}>
            <FormattedMessage id="SectionHowItWorksNew.WorkerSubtitle1" />
          </p>
          <p className={css.stepText}>
            <FormattedMessage id="SectionHowItWorksNew.WorkerText1" />
          </p>
        </div>
        <div className={css.stepMiddle}>
          <p className={css.numberImage}>1.</p>
        </div>
        <div className={css.step}>
          <p className={css.subtitle}>
            <FormattedMessage id="SectionHowItWorksNew.ManagerSubtitle1" />
          </p>
          <p className={css.stepText}>
            <FormattedMessage id="SectionHowItWorksNew.ManagerText1" />
          </p>
        </div>
      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <p className={css.subtitle}>
            <FormattedMessage id="SectionHowItWorksNew.WorkerSubtitle2" />
          </p>
          <p className={css.stepText}>
            <FormattedMessage id="SectionHowItWorksNew.WorkerText2" />
          </p>
        </div>
        <div className={css.stepMiddle}>
          <p className={css.numberImage}>2.</p>
        </div>
        <div className={css.step}>
          <p className={css.subtitle}>
            <FormattedMessage id="SectionHowItWorksNew.ManagerSubtitle2" />
          </p>
          <p className={css.stepText}>
            <FormattedMessage id="SectionHowItWorksNew.ManagerText2" />
          </p>
        </div>
      </div>
      <div className={css.steps}>
        <div className={css.step}>
          <p className={css.subtitle}>
            <FormattedMessage id="SectionHowItWorksNew.WorkerSubtitle3" />
          </p>
          <p className={css.stepText}>
            <FormattedMessage id="SectionHowItWorksNew.WorkerText3" />
          </p>
        </div>

        <div className={css.stepMiddle}>
          <p className={css.numberImage}>3.</p>
        </div>
        <div className={css.step}>
          <p className={css.subtitle}>
            <FormattedMessage id="SectionHowItWorksNew.ManagerSubtitle3" />
          </p>
          <p className={css.stepText}>
            <FormattedMessage id="SectionHowItWorksNew.ManagerText3" />
          </p>
        </div>
      </div>
      <div className={css.steps}>
        <div className={css.step}>
          <p className={css.subtitle}>
            <FormattedMessage id="SectionHowItWorksNew.WorkerSubtitle4" />
          </p>
          <p className={css.stepText}>
            <FormattedMessage id="SectionHowItWorksNew.WorkerText4" />
          </p>
        </div>
        <div className={css.stepMiddle}>
          <p className={css.numberImage}>4.</p>
        </div>

        <div className={css.step}>
          <p className={css.subtitle}>
            <FormattedMessage id="SectionHowItWorksNew.ManagerSubtitle4" />
          </p>
          <p className={css.stepText}>
            <FormattedMessage id="SectionHowItWorksNew.ManagerText4" />
          </p>
        </div>
      </div>
      <div className={css.steps}>
        <div className={css.step}>
          <p className={css.subtitle}>
            <FormattedMessage id="SectionHowItWorksNew.WorkerSubtitle5" />
          </p>
          <p className={css.stepTextLast}>
            <FormattedMessage id="SectionHowItWorksNew.WorkerText5" />
          </p>
        </div>
        <div className={css.stepMiddle}>
          <p className={css.numberImage}>5.</p>
        </div>
        <div className={css.step}>
          <p className={css.subtitle}>
            <FormattedMessage id="SectionHowItWorksNew.ManagerSubtitle5" />
          </p>
          <p className={css.stepTextLast}>
            <FormattedMessage id="SectionHowItWorksNew.ManagerText5" />
          </p>
        </div>
      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <a href="/l/new" className={css.howitworksButton}>
            <FormattedMessage id="SectionHowItWorks.joinButton" />
          </a>
        </div>
        <div className={css.stepMiddle}></div>
        <div className={css.step}>
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
      <p></p>
    </div>
  );
};

SectionHowItWorksNew.defaultProps = {
  rootClassName: null,
  className: null,
  currentUserListing: null,
  currentUserListingFetched: false,
};

SectionHowItWorksNew.propTypes = {
  rootClassName: string,
  className: string,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,
};

export default SectionHowItWorksNew;
