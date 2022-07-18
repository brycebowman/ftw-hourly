import React from 'react';
import { oneOf, string } from 'prop-types';
import classNames from 'classnames';

import config from '../../config';
import MobileLogoImage from './cafe-temps-red-logo-mobile.png';
import DesktopLogoImage from './cafe-temps-red-logo-landing.png';
import css from './Logo.module.css';

const LogoLanding = props => {
  const { className, format, ...rest } = props;
  const isMobile = format !== 'desktop';
  const classes = classNames(className, { [css.logoMobile]: isMobile });
  const logoImage = isMobile ? MobileLogoImage : DesktopLogoImage;

  return (
    <img
      className={classes}
      src={logoImage}
      alt={config.siteTitle}
      {...rest}
    />
  );
};

LogoLanding.defaultProps = {
  className: null,
  format: 'desktop',
};

LogoLanding.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile']),
};

export default LogoLanding;
