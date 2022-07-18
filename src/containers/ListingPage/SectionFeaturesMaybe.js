import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { PropertyGroup } from '../../components';
import { richText } from '../../util/richText';
import css from './ListingPage.module.css';

const SectionFeaturesMaybe = props => {
  const {
    options,
    publicData,
    RestaurantNameExp,
   } = props;
  if (!publicData) {
    return null;
  }
  const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20;
  const selectedOptions = publicData && publicData.yogaStyles ? publicData.yogaStyles : [];
  const selectedConfigOptions = options.filter(o => selectedOptions.find(s => s === o.key));

  return (
    <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.featuresTitle" />
      </h2>
      <PropertyGroup
        id="ListingPage.yogaStyles"
        options={selectedConfigOptions}
        selectedOptions={selectedOptions}
        twoColumns={selectedConfigOptions.length > 5}
      />
    </div>
  );
};

export default SectionFeaturesMaybe;
