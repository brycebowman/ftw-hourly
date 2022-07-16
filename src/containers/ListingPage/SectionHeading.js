import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { InlineTextButton } from '../../components';

import css from './ListingPage.module.css';
import idImage from './images/badge-id-text-large.gif';
import charterImage from './images/badge-founder-text-large.gif';

const getCertificateInfo = (certificateOptions, key) => {
  return certificateOptions.find(c => c.key === key);
};

const SectionHeading = props => {
  const {
    richTitle,
    listingCertificate,
    certificateOptions,
    showContactUser,
    onContactUser,
  } = props;

  const certificate = getCertificateInfo(certificateOptions, listingCertificate);
  const showCertificate = certificate && !certificate.hideFromListingInfo;
  return (
    <div className={css.sectionHeading}>
      <div className={css.heading}>
        <h1 className={css.title}>{richTitle}
        <div className={css.desktopOnly}>
        <img className={css.iconImageLeft} src={idImage} alt="ID Verified" rel="nofollow" />
        <img className={css.iconImage} src={charterImage} alt="Founding Member" />
        </div>
        </h1>
        <div className={css.mobileOnly}>
        <img className={css.iconImageLeft} src={idImage} alt="ID Verified" rel="nofollow" />
        <img className={css.iconImage} src={charterImage} alt="Founding Member" />
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
