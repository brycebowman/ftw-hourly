/**
 *  TopbarMobileMenu prints the menu content for authenticated user or
 * shows login actions for those who are not authenticated.
 */
import React from 'react';
import { bool, func, number, string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { ACCOUNT_SETTINGS_PAGES } from '../../routeConfiguration';
import { propTypes } from '../../util/types';
import { ensureCurrentUser } from '../../util/data';
import {
  AvatarLarge,
  InlineTextButton,
  NamedLink,
  NotificationBadge,
  OwnListingLink,
} from '../../components';
import chefImage from './images/chef.png';

import css from './TopbarMobileMenu.module.css';

const TopbarMobileMenu = props => {
  const {
    isAuthenticated,
    currentPage,
    currentUserHasListings,
    currentUserListing,
    currentUserListingFetched,
    currentUserRole,
    currentUser,
    notificationCount,
    onLogout,
  } = props;

  const user = ensureCurrentUser(currentUser);

  if (!isAuthenticated) {
    const signup = (
      <NamedLink name="SignupPage" className={css.signupLink}>
        <FormattedMessage id="TopbarMobileMenu.signupLink" />
      </NamedLink>
    );

    const login = (
      <NamedLink name="LoginPage" className={css.loginLink}>
        <FormattedMessage id="TopbarMobileMenu.loginLink" />
      </NamedLink>
    );

    const signupOrLogin = (
      <span className={css.authenticationLinks}>
        <FormattedMessage id="TopbarMobileMenu.signupOrLogin" values={{ signup, login }} />
      </span>
    );
    return (
      <div className={css.root}>
        <div className={css.content}>
          <div className={css.steps}>
          <div className={css.stepleft} vertical-align="top" >
          <div className={css.authenticationGreeting}>
          <FormattedMessage
            id="TopbarMobileMenu.unauthorizedGreeting1"
            values={{ lineBreak: <br />, signup, login, signupOrLogin }}
          />
          </div>
          <p> </p>
          <div className={css.greetingtext}>
          <FormattedMessage
            id="TopbarMobileMenu.unauthorizedGreeting2"
            values={{ lineBreak: <br />, signup, login, signupOrLogin }}
          />
          <p>  </p>
          <br />
          <p> </p>
          <FormattedMessage
            id="TopbarMobileMenu.unauthorizedGreeting3"
            values={{ lineBreak: <br />, signup, login, signupOrLogin }}
          />
          </div>
          </div>
          <div className={css.stepright}>
          <img className={css.iconImage} src={chefImage} align="center" alt="Cafe Icon" />
            </div>
            </div>
          </div>
        <div className={css.footer}>
          <NamedLink className={css.createNewListingLink} name="NewListingPage">
            <FormattedMessage id="TopbarMobileMenu.newListingLink" />
          </NamedLink>
        </div>
      </div>
    );
  }

  const notificationCountBadge =
    notificationCount > 0 ? (
      <NotificationBadge className={css.notificationBadge} count={notificationCount} />
    ) : null;

  const displayName = user.attributes.profile.firstName;
  const currentPageClass = page => {
    const isAccountSettingsPage =
      page === 'AccountSettingsPage' && ACCOUNT_SETTINGS_PAGES.includes(currentPage);
    return currentPage === page || isAccountSettingsPage ? css.currentPage : null;
  };

  return (
    <div className={css.root}>
      <AvatarLarge className={css.avatar} user={currentUser} />
      <div className={css.content}>
        <span className={css.greeting}>
          <FormattedMessage id="TopbarMobileMenu.greeting" values={{ displayName }} />
        </span>
        <InlineTextButton rootClassName={css.logoutButton} onClick={onLogout}>
          <FormattedMessage id="TopbarMobileMenu.logoutLink" />
        </InlineTextButton>
        <NamedLink
          className={classNames(css.inbox, currentPageClass('InboxPage'))}
          name="InboxPage"
          params={{ tab: currentUserHasListings ? 'sales' : 'orders' }}
        >
          <FormattedMessage id="TopbarMobileMenu.inboxLink" />
          {notificationCountBadge}
        </NamedLink>
        { currentUserRole === 'seller' &&
          <OwnListingLink
            listing={currentUserListing}
            listingFetched={currentUserListingFetched}
            className={css.navigationLink}
          />
        }
        { currentUserRole === 'buyer' &&
          <NamedLink
            className={classNames(css.navigationLink, currentPageClass('ProfileSettingsPage'))}
            name="ProfileSettingsPage"
          >
            <FormattedMessage id="TopbarMobileMenu.profileSettingsLink" />
          </NamedLink>
        }
        <NamedLink
          className={classNames(css.navigationLink, currentPageClass('AccountSettingsPage'))}
          name="AccountSettingsPage"
        >
          <FormattedMessage id="TopbarMobileMenu.accountSettingsLink" />
        </NamedLink>
      </div>
      { currentUserRole === 'seller' &&
        <div className={css.footer}>
          <NamedLink className={css.createNewListingLink} name="NewListingPage">
            <FormattedMessage id="TopbarMobileMenu.newListingLink" />
          </NamedLink>
        </div>
      }
    </div>
  );
};

TopbarMobileMenu.defaultProps = {
  currentUser: null,
  notificationCount: 0,
  currentPage: null,
  currentUserListing: null,
  currentUserListingFetched: false,
};

TopbarMobileMenu.propTypes = {
  isAuthenticated: bool.isRequired,
  currentUserHasListings: bool.isRequired,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,
  currentUser: propTypes.currentUser,
  currentPage: string,
  notificationCount: number,
  onLogout: func.isRequired,
};

export default TopbarMobileMenu;
