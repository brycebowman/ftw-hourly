import React from 'react';
import ActionBarMaybe from './ActionBarMaybe';

import css from './ListingPage.module.css';

import staticBg from './images/listing-page-static-header.gif';

const SectionImages = props => {
  const {
    title,
    listing,
    isOwnListing,
    editParams,
  } = props;

  // Action bar is wrapped with a div that prevents the click events
  // to the parent that would otherwise open the image carousel
  const actionBar = listing.id ? (
    <div onClick={e => e.stopPropagation()}>
      <ActionBarMaybe isOwnListing={isOwnListing} listing={listing} editParams={editParams} />
    </div>
  ) : null;

  return (
    <div className={css.sectionImages}>
      <div className={css.threeToTwoWrapper}>
        <div className={css.aspectWrapper}>
          {actionBar}
          <img src={staticBg} className={css.rootForImage} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default SectionImages;
