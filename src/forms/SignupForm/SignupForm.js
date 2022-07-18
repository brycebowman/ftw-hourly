import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { Form as FinalForm } from 'react-final-form';
import classNames from 'classnames';
import * as validators from '../../util/validators';
import {
  Form,
  PrimaryButton,
  FieldTextInputOval,
  FieldRadioButton,
  FieldPhoneNumberInputOval,
} from '../../components';
import workerImage from './images/workers.png';

import css from './SignupForm.module.css';

const KEY_CODE_ENTER = 13;

const SignupFormComponent = props => (
  <FinalForm
    {...props}
    render={fieldRenderProps => {
      const {
        rootClassName,
        className,
        formId,
        handleSubmit,
        inProgress,
        invalid,
        pristine,
        intl,
        onOpenTermsOfService,
        socialLoginButtonsMaybe,
      } = fieldRenderProps;

      const idPrefix = formId ? `${formId}` : 'SignupForm';

      // email
      const emailLabel = intl.formatMessage({
        id: 'SignupForm.emailLabel',
      });
      const emailPlaceholder = intl.formatMessage({
        id: 'SignupForm.emailPlaceholder',
      });
      const emailRequiredMessage = intl.formatMessage({
        id: 'SignupForm.emailRequired',
      });
      const emailRequired = validators.required(emailRequiredMessage);
      const emailInvalidMessage = intl.formatMessage({
        id: 'SignupForm.emailInvalid',
      });
      const emailValid = validators.emailFormatValid(emailInvalidMessage);

      // password
      const passwordLabel = intl.formatMessage({
        id: 'SignupForm.passwordLabel',
      });
      const passwordPlaceholder = intl.formatMessage({
        id: 'SignupForm.passwordPlaceholder',
      });
      const passwordRequiredMessage = intl.formatMessage({
        id: 'SignupForm.passwordRequired',
      });
      const passwordMinLengthMessage = intl.formatMessage(
        {
          id: 'SignupForm.passwordTooShort',
        },
        {
          minLength: validators.PASSWORD_MIN_LENGTH,
        }
      );
      const passwordMaxLengthMessage = intl.formatMessage(
        {
          id: 'SignupForm.passwordTooLong',
        },
        {
          maxLength: validators.PASSWORD_MAX_LENGTH,
        }
      );
      const passwordMinLength = validators.minLength(
        passwordMinLengthMessage,
        validators.PASSWORD_MIN_LENGTH
      );
      const passwordMaxLength = validators.maxLength(
        passwordMaxLengthMessage,
        validators.PASSWORD_MAX_LENGTH
      );
      const passwordRequired = validators.requiredStringNoTrim(
        passwordRequiredMessage
      );
      const passwordValidators = validators.composeValidators(
        passwordRequired,
        passwordMinLength,
        passwordMaxLength
      );

      // firstName
      const firstNameLabel = intl.formatMessage({
        id: 'SignupForm.firstNameLabel',
      });
      const firstNamePlaceholder = intl.formatMessage({
        id: 'SignupForm.firstNamePlaceholder',
      });
      const firstNameRequiredMessage = intl.formatMessage({
        id: 'SignupForm.firstNameRequired',
      });
      const firstNameRequired = validators.required(firstNameRequiredMessage);

      // lastName
      const lastNameLabel = intl.formatMessage({
        id: 'SignupForm.lastNameLabel',
      });
      const lastNamePlaceholder = intl.formatMessage({
        id: 'SignupForm.lastNamePlaceholder',
      });
      const lastNameRequiredMessage = intl.formatMessage({
        id: 'SignupForm.lastNameRequired',
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
          <FormattedMessage id="SignupForm.termsAndConditionsLinkText" />
        </span>
      );

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          <div className={css.background}>
            <div className={css.role}>
              <div className={css.left}>
                <div className={css.subtitle}>
                  <FormattedMessage id="SignupForm.ChooseRoleText" />
                </div>
                <FieldRadioButton
                  id={`${idPrefix}.seller`}
                  name="role"
                  label={intl.formatMessage({ id: 'SignupForm.roleSeller' })}
                  value="seller"
                  validate={roleRequired}
                  showAsRequired={pristine}
                />
                <FieldRadioButton
                  id={`${idPrefix}.buyer`}
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
            {socialLoginButtonsMaybe}
            <div className={css.name}>
              <FieldTextInputOval
                className={css.firstNameRoot}
                type="text"
                id={`${idPrefix}.fname`}
                name="fname"
                autoComplete="given-name"
                label={firstNameLabel}
                placeholder={firstNamePlaceholder}
                validate={firstNameRequired}
              />
              <FieldTextInputOval
                className={css.lastNameRoot}
                type="text"
                id={`${idPrefix}.lname`}
                name="lname"
                autoComplete="family-name"
                label={lastNameLabel}
                placeholder={lastNamePlaceholder}
                validate={lastNameRequired}
              />
              </div>
              <FieldTextInputOval
                type="email"
                id={`${idPrefix}.email`}
                name="email"
                autoComplete="email"
                label={emailLabel}
                placeholder={emailPlaceholder}
                validate={validators.composeValidators(emailRequired, emailValid)}
              />
              <div className={css.phone}>
              <div className={css.label}>
              {phoneLabel}
              </div>
              <FieldPhoneNumberInputOval
                className={css.phone}
                name="phoneNumber"
                id={`${idPrefix}.phoneNumber`}
                label={phoneLabel}
                placeholder={phonePlaceholder}
                validate={phoneRequired}
              />
              </div>
            <FieldTextInputOval
              className={css.password}
              type="password"
              id={`${idPrefix}.password`}
              name="password"
              autoComplete="new-password"
              label={passwordLabel}
              placeholder={passwordPlaceholder}
              validate={passwordValidators}
            />
          </div>

          <div className={css.bottomWrapper}>
            <p className={css.bottomWrapperText}>
              <span className={css.termsText}>
                <FormattedMessage
                  id="SignupForm.termsAndConditionsAcceptText"
                  values={{ termsLink }}
                />
              </span>
            </p>
            <PrimaryButton
              type="submit"
              inProgress={submitInProgress}
              disabled={submitDisabled}
            >
              <FormattedMessage id="SignupForm.signUp" />
            </PrimaryButton>
          </div>
        </Form>
      );
    }}
  />
);

SignupFormComponent.defaultProps = { inProgress: false };

const { bool, func } = PropTypes;

SignupFormComponent.propTypes = {
  inProgress: bool,

  onOpenTermsOfService: func.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const SignupForm = compose(injectIntl)(SignupFormComponent);
SignupForm.displayName = 'SignupForm';

export default SignupForm;
