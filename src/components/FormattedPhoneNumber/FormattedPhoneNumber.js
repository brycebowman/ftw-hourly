import React from "react";
import { formatPhoneNumber, isPossiblePhoneNumber } from 'react-phone-number-input'

export default function ({ number }) {
  console.log(isPossiblePhoneNumber(number))
  let phoneNumber = number
  if (!isPossiblePhoneNumber(number)) {
    phoneNumber = `+1${number}`
  }
  console.log(phoneNumber, formatPhoneNumber(phoneNumber))
  return (
    <>
     {formatPhoneNumber(phoneNumber)}
    </>
  )
}
