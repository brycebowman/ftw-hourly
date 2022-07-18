import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import * as validators from '../../util/validators';
import { PRICING_OPTIONS } from '../../util/listing';
import { Button, Form, FieldRadioButton } from '../../components';
import css from './EditListingPricingForm.module.css';

export const EditListingPricingFormComponent = props => (
  <FinalForm
    {...props}
    render={formRenderProps => {
      const {
        className,
        disabled,
        ready,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
      } = formRenderProps;

      const priceLabel = intl.formatMessage({ id: 'EditListingPricingForm.priceLabel' })
      const priceRequired = validators.required(
        intl.formatMessage({ id: 'EditListingPricingForm.priceRequired' })
      );

      const minimumDurationLabel = intl.formatMessage({ id: 'EditListingPricingForm.minimumDurationLabel' })
      const minimumDurationRequired = validators.required(
        intl.formatMessage({ id: 'EditListingPricingForm.minimumDurationRequired' })
      );

      const classes = classNames(css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;
      const { updateListingError, showListingsError } = fetchErrors || {};

      return (
        <Form onSubmit={handleSubmit} className={classes}>
          {updateListingError ? (
            <p className={css.error}>
              <FormattedMessage id="EditListingPricingForm.updateFailed" />
            </p>
          ) : null}
          {showListingsError ? (
            <p className={css.error}>
              <FormattedMessage id="EditListingPricingForm.showListingFailed" />
            </p>
          ) : null}
          <div className={css.steps}>
            <div className={css.step}>
          <h3>{ priceLabel }</h3>
          { Object.keys(PRICING_OPTIONS).map(value => (
              <FieldRadioButton
                id={value}
                name="price"
                label={intl.formatMessage({ id: `EditListingPricingForm.${value}` })}
                value={value}
                validate={priceRequired}
                showAsRequired={pristine}
                key={value}
              />
            ))
          }
          <div className={css.bluetip}>
          <FormattedMessage id="EditListingPricingForm.pricetip" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
          </div>
</div>
<div className={css.step}>
          <h3>{ minimumDurationLabel }</h3>
          { ['minimumDuration2', 'minimumDuration4', 'minimumDuration6', 'minimumDuration8'].map(value => (
              <FieldRadioButton
                id={value}
                name="minimumDuration"
                label={intl.formatMessage({ id: `EditListingPricingForm.${value}` })}
                value={value}
                validate={minimumDurationRequired}
                showAsRequired={pristine}
                key={value}
              />
            ))
          }
          <div className={css.bluetip}>
          <FormattedMessage id="EditListingPricingForm.minimumDurationtip" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
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

EditListingPricingFormComponent.defaultProps = { fetchErrors: null };

EditListingPricingFormComponent.propTypes = {
  intl: intlShape.isRequired,
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
};

export default compose(injectIntl)(EditListingPricingFormComponent);
