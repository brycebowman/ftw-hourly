import React from 'react';
import { string, bool, func, shape } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { NamedLink } from '../../components';
import routeConfiguration from '../../routeConfiguration';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import { LocationSearchForm } from '../../forms';
import { SectionLogoCarousel } from '../../components';
import { createResourceLocatorString } from '../../util/routes';
import { FormattedMessage } from '../../util/reactIntl';
import css from './SectionHero.module.css';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from "react-share";
import './Demo.css';


const SectionHeroComponent = ({ history, rootClassName, className }) => {
const classes = classNames(rootClassName || css.root, className);
  const handleSearchSubmit = values => {
    const { search, selectedPlace } = values.location;
    const { origin, bounds } = selectedPlace;
    const searchParams = { address: search, origin, bounds };

    history.push(createResourceLocatorString('SearchPage', routeConfiguration(), {}, searchParams));
  };
    const shareUrl = 'https://www.cafetemps.com';
    const sharetitle = 'Café Temps is the first gig marketplace exclusively for food service workers. Set your own rates, and accept only the gigs you want.';

  return (
    <div className={classes}>
    <div className={css.sharecontainer} >
    <div className="Demo__some-network">
       <FacebookShareButton
         url={shareUrl}
         quote={sharetitle}
         className="Demo__some-network__share-button"
       >
         <FacebookIcon size={32} />
       </FacebookShareButton>
     </div>
     <br />
     <div className="Demo__some-network">
        <TwitterShareButton
          url={shareUrl}
          title={sharetitle}
          className="Demo__some-network__share-button"
        >
          <TwitterIcon size={32} />
        </TwitterShareButton>
      </div>
             </div>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          <FormattedMessage id="SectionHero.title" />
          <FormattedMessage id="SectionHero.title2" />
          <FormattedMessage id="SectionHero.title3" />
        </h1>
        <h3 className={css.heroSubTitle}>
          <FormattedMessage id="SectionHero.subTitle" />
        </h3>
        <LocationSearchForm className={css.searchFormHero} onSubmit={handleSearchSubmit} />
        <NamedLink
          name="SearchPage"
          to={{
            search:
              'address=United%20States%20of%20America&bounds=71.540724%2C-66.885444%2C18.765563%2C-179.9',
          }}
          className={css.howitworksButton}
        >
          <FormattedMessage id="SectionHero.browseButton" />
        </NamedLink>
      </div>
    </div>
  );
};

SectionHeroComponent.defaultProps = { rootClassName: null, className: null };

SectionHeroComponent.propTypes = {
  rootClassName: string,
  className: string,
  scrollingDisabled: bool.isRequired,
  history: shape({
    push: func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const SectionHero = compose(
  withRouter,
  connect(mapStateToProps)
)(SectionHeroComponent);

export default SectionHero;
