import React, { useState } from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import loadable from '@loadable/component';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import arrayMutators from 'final-form-arrays';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import {
  maxLength,
  required,
  composeValidators,
  requiredFieldArrayCheckbox,
} from '../../util/validators';
import {
  Form,
  Button,
  FieldTextInput,
  FieldTextInputOval,
  FieldCheckboxGroup,
  FieldRadioButton,
} from '../../components';

import css from './EditListingDescriptionForm.module.css';

const ProfilePicturePage = loadable(() =>
  import(
    /* webpackChunkName: "ProfilePicturePage" */ '../../containers/ProfilePicturePage/ProfilePicturePage'
  )
);

const TITLE_MAX_LENGTH = 12;
const TWITTER_MAX_LENGTH = 20;
const DESC_MAX_LENGTH = 300;

const EditListingDescriptionFormComponent = props => {
  const [profilePictureDisabled, setProfilePictureDisabled] = useState(false)

  return (
    <FinalForm
      {...props}
      mutators={{ ...arrayMutators }}
      render={formRenderProps => {
        const {
          certificateOptions,
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
          languageOptions,
        } = formRenderProps;

        const titleMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.title' });
        const titlePlaceholderMessage = intl.formatMessage({
          id: 'EditListingDescriptionForm.titlePlaceholder',
        });
        const twitterhandleMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.twitterhandle' });
        const twitterhandlePlaceholderMessage = intl.formatMessage({
          id: 'EditListingDescriptionForm.twitterhandlePlaceholder',
        });

        const titleRequiredMessage = intl.formatMessage({
          id: 'EditListingDescriptionForm.titleRequired',
        });
        const maxLengthMessage = intl.formatMessage(
          { id: 'EditListingDescriptionForm.maxLength' },
          {
            maxLength: TITLE_MAX_LENGTH,
          }
        );
        const maxLengthDescMessage = intl.formatMessage(
          { id: 'EditListingDescriptionForm.maxLength' },
          {
            maxLength: DESC_MAX_LENGTH,
          }
        );

        const descriptionMessage = intl.formatMessage({
          id: 'EditListingDescriptionForm.description',
        });
        const descriptionPlaceholderMessage = intl.formatMessage({
          id: 'EditListingDescriptionForm.descriptionPlaceholder',
        });
        const maxLength60Message = maxLength(maxLengthMessage, TITLE_MAX_LENGTH);
        const descriptionRequiredMessage = intl.formatMessage({
          id: 'EditListingDescriptionForm.descriptionRequired',
        });
        const maxLength80Message = maxLength(maxLengthMessage, TWITTER_MAX_LENGTH);
        const maxLength300Message = maxLength(maxLengthDescMessage, DESC_MAX_LENGTH);

        const { updateListingError, createListingDraftError, showListingsError } =
          fetchErrors || {};
        const errorMessageUpdateListing = updateListingError ? (
          <p className={css.error}>
            <FormattedMessage id="EditListingDescriptionForm.updateFailed" />
          </p>
        ) : null;

        // This error happens only on first tab (of EditListingWizard)
        const errorMessageCreateListingDraft = createListingDraftError ? (
          <p className={css.error}>
            <FormattedMessage id="EditListingDescriptionForm.createListingDraftError" />
          </p>
        ) : null;

        const errorMessageShowListing = showListingsError ? (
          <p className={css.error}>
            <FormattedMessage id="EditListingDescriptionForm.showListingFailed" />
          </p>
        ) : null;

        const longTermRequired = required(
          intl.formatMessage({ id: 'EditListingDescriptionForm.longTermRequired' })
        );

        const languageRequired = requiredFieldArrayCheckbox(
          intl.formatMessage({ id: 'EditListingDescriptionForm.languageRequired' })
        );

        const classes = classNames(css.root, className);
        const submitReady = (updated && pristine) || ready;
        const submitInProgress = updateInProgress;
        const submitDisabled = invalid || disabled || submitInProgress || profilePictureDisabled;

        return (
          <Form className={classes} onSubmit={handleSubmit}>
            {errorMessageCreateListingDraft}
            {errorMessageUpdateListing}
            {errorMessageShowListing}
            <FieldTextInputOval
              id="title"
              name="title"
              className={css.title}
              type="text"
              label={titleMessage}
              placeholder={titlePlaceholderMessage}
              maxLength={TITLE_MAX_LENGTH}
              validate={composeValidators(required(titleRequiredMessage), maxLength60Message)}
              autoFocus
            />

            <div className={css.tipBlack}>
              Maximum Characters: 12
            </div>
            <p> </p>

            <FieldTextInputOval
              id="twitterhandle"
              name="twitterhandle"
              className={css.title}
              type="text"
              label={twitterhandleMessage}
              placeholder={twitterhandlePlaceholderMessage}
              maxLength={TWITTER_MAX_LENGTH}
              validate={composeValidators( maxLength80Message )}
              autoFocus
            />
            <div className={css.tipBlack}>
            <FormattedMessage id="EditListingDescriptionForm.twittertip" />
              <br />
              <p> </p>
            </div>


            <FieldTextInputOval
              id="description"
              name="description"
              className={css.description}
              type="textarea"
              label={descriptionMessage}
              placeholder={descriptionPlaceholderMessage}
              maxLength={DESC_MAX_LENGTH}
              validate={composeValidators(
                required(descriptionRequiredMessage),
                maxLength300Message
              )}
            />
            <div className={css.tipBlack}>Maximum Characters: 300</div>

            <div className={css.steps}>
              <div className={css.stepleft}>
                <h3>{intl.formatMessage({ id: 'EditListingDescriptionForm.language' })}</h3>
                <FieldCheckboxGroup
                  className={css.language}
                  id="language"
                  name="language"
                  options={languageOptions}
                  validate={languageRequired}
                />
              </div>
              <div className={css.stepright}>
                <h3>{intl.formatMessage({ id: 'EditListingDescriptionForm.certificateLabel' })}</h3>
                {certificateOptions.map(option => (
                  <FieldRadioButton
                    id={option.key}
                    name="certificate"
                    label={option.label}
                    value={option.key}
                    validate={longTermRequired}
                    showAsRequired={pristine}
                    key={option.key}
                  />
                ))}
              </div>
            </div>
            <ProfilePicturePage
              setProfilePictureDisabled={setProfilePictureDisabled}
            />

            <Button
              className={css.submitButton}
              type="submit"
              inProgress={submitInProgress}
              disabled={submitDisabled}
              ready={submitReady}
            >
              {saveActionMsg}
            </Button>
          </Form>
        );
      }}
    />
  );
};

EditListingDescriptionFormComponent.defaultProps = {
  className: null,
  fetchErrors: null,
};

EditListingDescriptionFormComponent.propTypes = {
  className: string,
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    createListingDraftError: propTypes.error,
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
  certificateOptions: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ),
};

export default compose(injectIntl)(EditListingDescriptionFormComponent);
