import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { PropertyGroupNoCheck } from '../../components';

import css from './ListingPage.module.css';

const SectionDistanceMaybe = props => {
  const { options, publicData } = props;
  if (!publicData) {
    return null;
  }

  const selectedOptions = publicData && publicData.willingToTravel ? [publicData.willingToTravel] : [];
  const selectedConfigOptions = options.filter(o => selectedOptions.find(s => s === o.key));

  return (
    <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.locationTitle" />
      </h2>
      <div className={css.distance}>
      <PropertyGroupNoCheck
        id="ListingPage.willingToTravel"
        options={selectedConfigOptions}
        selectedOptions={selectedOptions}
        twoColumns={selectedConfigOptions.length > 5}
      />
      </div>
    </div>
  );
};

export default SectionDistanceMaybe;
