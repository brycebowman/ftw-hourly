import config from '../config';
import { types as sdkTypes } from './sdkLoader';

const { Money } = sdkTypes;

export const PRICING_OPTIONS = {
  price15: new Money(1500, config.currency),
  price20: new Money(2000, config.currency),
  price25: new Money(2500, config.currency),
  price30: new Money(3000, config.currency),
  price35: new Money(3500, config.currency),
  price40: new Money(4000, config.currency),
  price45: new Money(4500, config.currency),
  price50: new Money(5000, config.currency),
}

export const pricingMoneyFromOption = option => (PRICING_OPTIONS[option]);
export const pricingOptionFromMoney = value => {
  if (!value) { return; }

  return `price${value.amount / 100}`;
};
