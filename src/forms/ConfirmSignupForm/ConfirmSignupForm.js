import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { Form as FinalForm } from 'react-final-form';
import classNames from 'classnames';
import * as validators from '../../util/validators';
import {
  Form,
  IDPButton,
  FieldTextInputOval,
  FieldRadioButton,
  FieldPhoneNumberInputOval,
} from '../../components';

import workerImage from './images/workers.png';
import css from './ConfirmSignupForm.module.css';

const KEY_CODE_ENTER = 13;

const ConfirmSignupFormComponent = props => (
  <FinalForm
    {...props}
    render={formRenderProps => {
      const {
        rootClassName,
        className,
        formId,
        handleSubmit,
        inProgress,
        invalid,
        intl,
        onOpenTermsOfService,
        authInfo,
        idp,
        pristine,
      } = formRenderProps;

      // email
      const emailLabel = intl.formatMessage({
        id: 'ConfirmSignupForm.emailLabel',
      });
      const emailPlaceholder = intl.formatMessage({
        id: 'ConfirmSignupForm.emailPlaceholder',
      });
      const emailRequiredMessage = intl.formatMessage({
        id: 'ConfirmSignupForm.emailRequired',
      });
      const emailRequired = validators.required(emailRequiredMessage);
      const emailInvalidMessage = intl.formatMessage({
        id: 'ConfirmSignupForm.emailInvalid',
      });
      const emailValid = validators.emailFormatValid(emailInvalidMessage);

      // firstName
      const firstNameLabel = intl.formatMessage({
        id: 'ConfirmSignupForm.firstNameLabel',
      });
      const firstNamePlaceholder = intl.formatMessage({
        id: 'ConfirmSignupForm.firstNamePlaceholder',
      });
      const firstNameRequiredMessage = intl.formatMessage({
        id: 'ConfirmSignupForm.firstNameRequired',
      });
      const firstNameRequired = validators.required(firstNameRequiredMessage);

      // lastName
      const lastNameLabel = intl.formatMessage({
        id: 'ConfirmSignupForm.lastNameLabel',
      });
      const lastNamePlaceholder = intl.formatMessage({
        id: 'ConfirmSignupForm.lastNamePlaceholder',
      });
      const lastNameRequiredMessage = intl.formatMessage({
        id: 'ConfirmSignupForm.lastNameRequired',
      });
      const lastNameRequired = validators.required(lastNameRequiredMessage);

      // role
      const roleRequiredMessage = intl.formatMessage({
        id: 'SignupForm.roleRequired',
      });
      const roleRequired = validators.required(roleRequiredMessage);

      const phonePlaceholder = intl.formatMessage({
        id: 'ContactDetailsForm.phonePlaceholder',
      });
      const phoneLabel = intl.formatMessage({ id: 'ContactDetailsForm.phoneLabel' });
      const phoneRequired = validators.required(intl.formatMessage({ id: 'SignupForm.phoneRequired' }))

      const classes = classNames(rootClassName || css.root, className);
      const submitInProgress = inProgress;
      const submitDisabled = invalid || submitInProgress;

      const handleTermsKeyUp = e => {
        // Allow click action with keyboard like with normal links
        if (e.keyCode === KEY_CODE_ENTER) {
          onOpenTermsOfService();
        }
      };
      const termsLink = (
        <span
          className={css.termsLink}
          onClick={onOpenTermsOfService}
          role="button"
          tabIndex="0"
          onKeyUp={handleTermsKeyUp}
        >
          <FormattedMessage id="ConfirmSignupForm.termsAndConditionsLinkText" />
        </span>
      );

      // If authInfo is not available we should not show the ConfirmForm
      // if (!authInfo) {
      //   return;
      // }

      // Initial values from idp provider
      const { email, firstName, lastName } = authInfo || {};

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          <div>
            <div className={css.role}>
              <div className={css.left}>
                <div className={css.subtitle}>
                  <FormattedMessage id="SignupForm.ChooseRoleText" />
                </div>
                <FieldRadioButton
                  id={`${formId}.seller`}
                  name="role"
                  label={intl.formatMessage({ id: 'SignupForm.roleSeller' })}
                  value="seller"
                  validate={roleRequired}
                  showAsRequired={pristine}
                />
                <FieldRadioButton
                  id={`${formId}.buyer`}
                  name="role"
                  label={intl.formatMessage({ id: 'SignupForm.roleBuyer' })}
                  value="buyer"
                  showAsRequired={pristine}
                />
              </div>
              <div className={css.right}>
                <img
                  className={css.iconImage}
                  src={workerImage}
                  alt="Cafe Icon"
                />
              </div>
            </div>
            <FieldTextInputOval
              type="email"
              id={formId ? `${formId}.email` : 'email'}
              name="email"
              autoComplete="email"
              label={emailLabel}
              placeholder={emailPlaceholder}
              initialValue={email}
              validate={validators.composeValidators(emailRequired, emailValid)}
            />
            <FieldPhoneNumberInputOval
              className={css.phone}
              name="phoneNumber"
              id={formId ? `${formId}.phoneNumber`: 'phoneNumber'}
              label={phoneLabel}
              placeholder={phonePlaceholder}
              validate={phoneRequired}
            />
            <div className={css.name}>
              <FieldTextInputOval
                className={css.firstNameRoot}
                type="text"
                id={formId ? `${formId}.firstName` : 'firstName'}
                name="firstName"
                autoComplete="given-name"
                label={firstNameLabel}
                placeholder={firstNamePlaceholder}
                initialValue={firstName}
                validate={firstNameRequired}
              />
              <FieldTextInputOval
                className={css.lastNameRoot}
                type="text"
                id={formId ? `${formId}.lastName` : 'lastName'}
                name="lastName"
                autoComplete="family-name"
                label={lastNameLabel}
                placeholder={lastNamePlaceholder}
                initialValue={lastName}
                validate={lastNameRequired}
              />
            </div>
          </div>

          <div className={css.bottomWrapper} align="middle">
            <p className={css.bottomWrapperText}>
              <span className={css.termsText}>
                <FormattedMessage
                  id="ConfirmSignupForm.termsAndConditionsAcceptText"
                  values={{ termsLink }}
                />
              </span>
            </p>
            <IDPButton
              type="submit"
              inProgress={submitInProgress}
              disabled={submitDisabled}
            >
              <FormattedMessage
                id="ConfirmSignupForm.signUp"
                values={{ lineBreak: <br />, idp: idp }}
              />
            </IDPButton>
          </div>
        </Form>
      );
    }}
  />
);

ConfirmSignupFormComponent.defaultProps = { inProgress: false };

const { bool, func } = PropTypes;

ConfirmSignupFormComponent.propTypes = {
  inProgress: bool,

  onOpenTermsOfService: func.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const ConfirmSignupForm = compose(injectIntl)(ConfirmSignupFormComponent);
ConfirmSignupForm.displayName = 'ConfirmSignupForm';

export default ConfirmSignupForm;
