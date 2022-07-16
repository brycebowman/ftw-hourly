import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';

import { LISTING_STATE_DRAFT } from '../../util/types';
import { ensureListing } from '../../util/data';
import { EditListingSkillsForm } from '../../forms';
import { ListingLink } from '../../components';

import css from './EditListingSkillsPanel.module.css';

const SKILLS_NAME = 'skills';

const EditListingSkillsPanel = props => {
  const {
    rootClassName,
    className,
    listing,
    disabled,
    ready,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureListing(listing);
  const { publicData } = currentListing.attributes;

  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  const panelTitle = isPublished ? (
    <FormattedMessage
      id="EditListingSkillsPanel.title"
      values={{
        listingTitle: (
          <ListingLink listing={listing}>
            <FormattedMessage id="EditListingSkillsPanel.listingTitle" />
          </ListingLink>
        ),
      }}
    />
  ) : (
    <FormattedMessage id="EditListingSkillsPanel.createListingTitle" />
  );

  const { skills, yearsexp } = publicData || {};
  const initialValues = { skills, yearsexp };

  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingSkillsForm
        className={css.form}
        name={SKILLS_NAME}
        initialValues={initialValues}
        onSubmit={values => {
          const { skills = [], yearsexp } = values;

          const updatedValues = {
            publicData: { skills, yearsexp },
          };

          onSubmit(updatedValues);
        }}
        onChange={onChange}
        saveActionMsg={submitButtonText}
        disabled={disabled}
        ready={ready}
        updated={panelUpdated}
        updateInProgress={updateInProgress}
        fetchErrors={errors}
      />
    </div>
  );
};

EditListingSkillsPanel.defaultProps = {
  rootClassName: null,
  className: null,
  listing: null,
};

const { bool, func, object, string } = PropTypes;

EditListingSkillsPanel.propTypes = {
  rootClassName: string,
  className: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  disabled: bool.isRequired,
  ready: bool.isRequired,
  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingSkillsPanel;
