 import React from 'react';
 import { isPossiblePhoneNumber } from 'react-phone-number-input';
 import PhoneInput from 'react-phone-number-input/input';
 import { FieldTextInputOval } from '../../components';
 import css from './FieldPhoneNumberInput.module.css';
 const PhoneAdapter = ({ input }) => (
   <PhoneInput
     country="US"
     maxLength={14}
     className={css.phone}
     rules={{ required: true, validate: isPossiblePhoneNumber }}
     {...input}
   />
 );

 const FieldPhoneNumberInputOval = props => {
   const inputProps = {
     type: 'text',
     component: PhoneAdapter,
     ...props,
   };

   return <FieldTextInputOval {...inputProps} />;
 };

 export default FieldPhoneNumberInputOval;
