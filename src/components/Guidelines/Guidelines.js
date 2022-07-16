import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Guidelines.module.css';

const Guidelines = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
    <p></p>
      <p className={css.lastUpdated}>Last updated: July 20, 2021</p>
      <p>By using the Café Temps platform, you agree to our Community Guidelines. If you have any questions about these Community Guidelines or if you believe that a user has violated these Community Guidelines, please email us immediately at admin@cafetemps.com.
      </p>
      <h2>FOR WORKERS</h2>
        <h3>1. Create Accurate Listings.</h3>
      <p> Workers should accurately state their prior restaurant experience on their profile and in communication with managers. While we rely on managers to provide constructive feedback via the review process, we also reserve the right to take action in the case of obvious false statements.
      </p>
        <h3>2. Be Respectful and Polite.</h3>
      <p> We expect all workers to be professional in all interactions with managers, co-workers, and restaurant customers. We aggressively enforce a zero tolerance policy for incidents of foul language or harassment of any kind. In the event of a substantiated complaint from a manager or restaurant location, we will permanently ban the worker from our platform.
      </p>
      <h3>3. Arrive On Time and Expect to Help.</h3>
    <p> Restaurant managers are paying a premium to hire workers to fill an emergency need at their restaurant. For this reason, it is critical that workers arrive at the expected time.</p>
    <p>Workers should be willing to do any task required, unless the task violates a reasonable standard of ethics. Workers recognize that in periods of short staff, everyone contributes wherever possible. While some tasks may be more mundane and less enjoyable, Café Temps workers should be willing to do anything to help the restaurant stay open and contribute to a clean and productive facility.
    </p>
      <h3>4. Do Not Promote Services Outside Café Temps.</h3>
        <p> Workers are not permitted to promote outside services on their listing profile or in communication with restaurants. This includes offers for direct contact outside of the marketplace. Café Temps relies on marketplace transactions to keep the platform running. We reserve the right to edit profiles to remove promotional offers, and we may ban repeat offenders.
        </p>
        <h2>FOR RESTAURANTS</h2>
          <h3>1. Treat Workers Fairly.</h3>
        <p>Restaurant managers should treat all workers with respect and courtesy. We aggressively enforce a zero tolerance policy for abuse of any kind.
        </p>
        <p>
        Remember, workers are likely at the location for the first time, and won’t be familiar with the specifics of your restaurant. We expect all managers to provide constructive guidance to our workers and maintain reasonable expectations.
        </p>
          <h3>2. Maintain Insurance.</h3>
        <p> Café Temps does not provide insurance of any kind. We rely on restaurants to have an active policy for their premises that has adequate coverage for foreseeable accidents involving Café Temps workers, employees, and customers at the restaurant premises.
        </p>
        <h2>FOR EVERYONE</h2>
          <h3>1. Communicate honestly with others.</h3>
        <p>Café Temps depends on the honesty and integrity of both workers and restaurant managers. We encourage everyone to leave honest and constructive reviews on the platform.
        </p>
        <p>
        Only message other users for the intended purpose of the platform, and do not engage in fraudulent activity of any kind.
        </p>
    </div>
  );
};

Guidelines.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

Guidelines.propTypes = {
  rootClassName: string,
  className: string,
};

export default Guidelines;
