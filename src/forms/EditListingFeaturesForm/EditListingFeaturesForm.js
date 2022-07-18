import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import classNames from 'classnames';
import { compose } from 'redux';
import loadable from '@loadable/component';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { findOptionsForSelectFilter } from '../../util/search';
import { propTypes } from '../../util/types';
import config from '../../config';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import { maxLength, required, composeValidators, requiredFieldArrayCheckbox } from '../../util/validators';
import { Button, FieldCheckboxGroup, FieldTextInputOval, Form } from '../../components';

import css from './EditListingFeaturesForm.module.css';

const EditListingFeaturesFormComponent = props => (
  <FinalForm
    {...props}
    mutators={{ ...arrayMutators }}
    render={formRenderProps => {
      const {
        disabled,
        ready,
        rootClassName,
        className,
        intl,
        name,
        handleSubmit,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
        filterConfig,
      } = formRenderProps;

      const classes = classNames(rootClassName || css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = disabled || submitInProgress;

      const { updateListingError, showListingsError } = fetchErrors || {};
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.updateFailed" />
        </p>
      ) : null;

      const TITLE_MAX_LENGTH = 60;

      const maxLengthMessage = intl.formatMessage(
        { id: 'EditListingDescriptionForm.maxLength' },
        {
          maxLength: TITLE_MAX_LENGTH,
        }
      );
      const descriptionMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.description',
      });
      const descriptionPlaceholderMessage = intl.formatMessage({
        id: 'EditListingRestaurantExpForm.placeholder',
      });
      const maxLength60Message = maxLength(maxLengthMessage, TITLE_MAX_LENGTH);
      const descriptionRequiredMessage = intl.formatMessage({
        id: 'EditListingRestaurantExpForm.required',
      });

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.showListingFailed" />
        </p>
      ) : null;

      const options = findOptionsForSelectFilter('yogaStyles', filterConfig);
      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          {errorMessageShowListing}
          <div className={css.steps}>
            <div className={css.step}>
              <h3>Type of Restaurant:</h3>
              <h4>[Select All that Apply]</h4>
          <FieldCheckboxGroup className={css.features} id={name} name={name} options={options} />
          </div>
          <div className={css.step}>
          <h3>
          <FormattedMessage id="EditListingFeaturesPanel.restaurantexp" />
          </h3>
          <h4>[Separate multiple names with a comma]</h4>
          <FieldTextInputOval
            id="RestaurantNameExp"
            name="RestaurantNameExp"
            className={css.RestaurantNameExp}
            type="textarea"
            placeholder={descriptionPlaceholderMessage}
            validate={composeValidators(required(descriptionRequiredMessage))}
            />
            <div className={css.tipBlue}>
              <FormattedMessage id="ProfileSettingsForm.restaurantexptip" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
            </div>

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
          </div>
          </div>

        </Form>
      );
    }}
  />
);

EditListingFeaturesFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  fetchErrors: null,
  filterConfig: config.custom.filters,
};

EditListingFeaturesFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  intl: intlShape.isRequired,
  name: string.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
  filterConfig: propTypes.filterConfig,
};


export default compose(injectIntl)(EditListingFeaturesFormComponent);
