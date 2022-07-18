import React from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import css from './SectionRulesMaybe.module.css';

const SectionRestaurantExpMaybe = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  return publicData && publicData.RestaurantNameExp ? (
    <div className={css.sectionFeatures}>
      <p className={css.sectionFeatures}>{publicData.RestaurantNameExp}</p>
    </div>
  ) : null;
};

SectionRestaurantExpMaybe.defaultProps = { className: null, rootClassName: null };

SectionRestaurantExpMaybe.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    RestaurantNameExp: string,
  }),
};

export default SectionRestaurantExpMaybe;
