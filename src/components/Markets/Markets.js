import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { OwnListingLink } from '../../components';
import sanfranImage from './images/markets-san-francisco.gif';
import newyorkImage from './images/markets-new-york.gif';
import rocketImage from './images/rocket-launch.gif';
import cityImage from './images/future-markets.gif';
import { NamedLink } from '../../components';
import css from './Markets.module.css';

const SectionMarkets = props => {
  const { rootClassName, className, currentUserListing, currentUserListingFetched } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
    <div className={css.mainImage} >
    <p className={css.mainTitle} >
      <FormattedMessage id="SectionMarkets.maintitle" />
    </p>
    <div className={css.mainTextDesktop}>
      <FormattedMessage id="SectionMarkets.part1Text" />
    </div>
    <p className={css.mainSubtitle}>
      <FormattedMessage id="SectionMarkets.part1Text2" />
    </p>
    <ul className={css.listMain}>
      <li className={css.mainText}>
        <FormattedMessage id="SectionMarkets.part1Text3" />
      </li>
      </ul>
      <ul className={css.listMain}>
      <li className={css.mainText}>
        <FormattedMessage id="SectionMarkets.part1Text4" />
      </li>
      </ul>
      <ul className={css.listMain}>
      <li className={css.mainText}>
        <FormattedMessage id="SectionMarkets.part1Text5" />
      </li>
    </ul>
      </div>
      <div className={css.HowItWorks}>
      <div className={css.title}>
        <FormattedMessage id="SectionMarkets.title" />
      </div>
      <div className={css.steps}>
      <div className={css.step}>
      <img className={css.iconImage} src={newyorkImage} alt="New York Restaurants" />
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionMarkets.part2Title" />
            </h2>
            <div className={css.subtitle}>
                  <FormattedMessage id="SectionMarkets.part2Subtitle" />
                </div>
          <p className={css.stepText}>
            <FormattedMessage id="SectionMarkets.part2Text" />
          </p>
          <p className={css.stepText}>
            <FormattedMessage id="SectionMarkets.part2Text2" />
          </p>
          <div className={css.stepText} align="left">
            <a href="/l/new"
            className={css.howitworksButton} align='center'>
            <FormattedMessage id="SectionHowItWorks.joinButton" />
            </a>
        </div>
        </div>
        <div className={css.stepRight}>
      <img className={css.iconImage} src={cityImage} alt="Upcoming Launches" />
      <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionMarkets.part3Title" />
          </h2>
          <div className={css.subtitle}>
                <FormattedMessage id="SectionMarkets.part3Subtitle" />
              </div>
          <p className={css.stepText}>
            <FormattedMessage id="SectionMarkets.part3Text2" />
          </p>
          <ul className={css.list}>
            <li>
              <FormattedMessage id="SectionMarkets.line1" />
            </li>
            <li>
              <FormattedMessage id="SectionMarkets.line2" />
            </li>
            <li>
              <FormattedMessage id="SectionMarkets.line3" />
            </li>
          </ul>
          <p className={css.stepText}>
            <FormattedMessage id="SectionMarkets.part3Text" />
          </p>
          <ul className={css.listCities}>
            <li>
              <FormattedMessage id="SectionMarketsCities.line1" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line2" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line3" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line4" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line5" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line6" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line7" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line8" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line9" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line10" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line11" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line12" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line12b" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line13" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line14" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line15" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line16" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line17" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line18" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line19" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line20" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line21" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line22" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line23" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line24" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line25" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line26" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line27" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line28" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line29" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line30" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line31" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line32" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line33" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line34" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line35" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line36" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line37" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line38" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line39" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line40" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line41" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line42" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line43" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line44" />
            </li>
            <li>
              <FormattedMessage id="SectionMarketsCities.line45" />
            </li>
          </ul>
          <a href="/l/new"
          className={css.howitworksButton} align='left'>
          <FormattedMessage id="SectionHowItWorks.joinButton" />
          </a>
        </div>
      </div>
      <p></p>
      <p></p>
        </div>
        </div>

  );
};

SectionMarkets.defaultProps = {
  rootClassName: null,
  className: null,
  currentUserListing: null,
  currentUserListingFetched: false,
};

SectionMarkets.propTypes = {
  rootClassName: string,
  className: string,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,
};

export default SectionMarkets;
