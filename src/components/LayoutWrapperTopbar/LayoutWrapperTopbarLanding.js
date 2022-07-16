/**
 * This is a wrapper component for different Layouts.
 * Topbar should be added to this wrapper.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './LayoutWrapperTopbar.module.css';

const LayoutWrapperTopbarLanding = props => {
  const { className, rootClassName, children } = props;
  const classes = classNames(rootClassName || css.root, className);

  return <div className={classes}>{children}</div>;
};

LayoutWrapperTopbarLanding.defaultProps = {
  className: null,
  rootClassName: null,
};

const { node, string } = PropTypes;

LayoutWrapperTopbarLanding.propTypes = {
  children: node.isRequired,
  className: string,
  rootClassName: string,
};

export default LayoutWrapperTopbarLanding;
