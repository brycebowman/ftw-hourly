import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import classNames from 'classnames';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { injectIntl, FormattedMessage } from '../../util/reactIntl';
import { findOptionsForSelectFilter } from '../../util/search';
import { propTypes } from '../../util/types';
import { required, requiredFieldArrayCheckbox } from '../../util/validators';
import config from '../../config';
import { Button, FieldRadioButton, FieldCheckboxGroup, Form } from '../../components';

import css from './EditListingSkillsForm.module.css';

const EditListingSkillsFormComponent = props => (
  <FinalForm
    {...props}
    mutators={{ ...arrayMutators }}
    render={formRenderProps => {
      const {
        disabled,
        ready,
        rootClassName,
        className,
        name,
        intl,
        handleSubmit,
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
          <FormattedMessage id="EditListingSkillsForm.updateFailed" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingSkillsForm.showListingFailed" />
        </p>
      ) : null;

      const yearsexpLabel = intl.formatMessage({ id: 'EditListingSkillsForm.yearsexpLabel' });
      const yearsexpRequired = required(
        intl.formatMessage({ id: 'EditListingSkillsForm.yearsexpRequired' })
      );

      const skillsRequired = requiredFieldArrayCheckbox(
        intl.formatMessage({ id: 'EditListingSkillsForm.skillsRequired' })
      );
      const skillsOptions = findOptionsForSelectFilter('skills', filterConfig);

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          {errorMessageShowListing}
          <div className={css.steps}>
            <div className={css.step}>
              <h2>Skills</h2>
              <p>Select All that Apply:</p>
              <FieldCheckboxGroup
                className={css.features}
                id={name}
                name={name}
                options={skillsOptions}
                validate={skillsRequired}
              />
            </div>
            <div className={css.step}>
              <h2>{yearsexpLabel}</h2>
              {[
                'None',
                '3-6Months',
                '6-12Months',
                '1-2Years',
                '3Years',
              ].map(value => (
                <FieldRadioButton
                  id={value}
                  name="yearsexp"
                  label={intl.formatMessage({ id: `EditListingSkillsForm.${value}` })}
                  value={value}
                  validate={yearsexpRequired}
                  showAsRequired={pristine}
                  key={value}
                />
              ))}

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

EditListingSkillsFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  fetchErrors: null,
  filterConfig: config.custom.filters,
};

EditListingSkillsFormComponent.propTypes = {
  rootClassName: string,
  className: string,
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

export default compose(injectIntl)(EditListingSkillsFormComponent);
