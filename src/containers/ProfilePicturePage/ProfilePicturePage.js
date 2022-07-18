import React from 'react';
import { bool, func } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { injectIntl, intlShape } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { ensureCurrentUser } from '../../util/data';
import { ProfilePictureForm } from '../../forms';

import { isScrollingDisabled } from '../../ducks/UI.duck';
import { updateProfile, uploadImage } from './ProfilePicturePage.duck';
import css from './ProfilePicturePage.module.css';

const onImageUploadHandler = (values, fn) => {
  const { id, imageId, file } = values;
  if (file) {
    fn({ id, imageId, file });
  }
};

export class ProfilePicturePageComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.image !== this.props.image) && (this.props.image && this.props.image.imageId)) {
      this.handleSubmit();
    }
  }

  handleSubmit = () => {
    const uploadedImage = this.props.image;

    // Update profileImage only if file system has been accessed
    const updatedValues =
      uploadedImage && uploadedImage.imageId && uploadedImage.file
        ? { profileImageId: uploadedImage.imageId }
        : profile;

    this.props.onUpdateProfile(updatedValues);
  };

  render() {
    const {
      currentUser,
      currentUserRole,
      image,
      onImageUpload,
      updateInProgress,
      updateProfileError,
      uploadImageError,
      uploadInProgress,
      setProfilePictureDisabled,
    } = this.props;

    const user = ensureCurrentUser(currentUser);
    const profileImageId = user.profileImage ? user.profileImage.id : null;
    const profileImage = image || { imageId: profileImageId };

    const profileSettingsForm = user.id ? (
      <ProfilePictureForm
        className={css.form}
        currentUser={currentUser}
        currentUserRole={currentUserRole}
        initialValues={{ profileImage: user.profileImage }}
        profileImage={profileImage}
        onImageUpload={e => onImageUploadHandler(e, onImageUpload)}
        uploadInProgress={uploadInProgress}
        updateInProgress={updateInProgress}
        uploadImageError={uploadImageError}
        updateProfileError={updateProfileError}
        setProfilePictureDisabled={setProfilePictureDisabled}
        onSubmit={() => {}}
      />
    ) : null;

    return profileSettingsForm;
  }
}

ProfilePicturePageComponent.defaultProps = {
  saveEmailError: null,
  savePhoneNumberError: null,
  currentUser: null,
  sendVerificationEmailError: null,
  resetPasswordInProgress: false,
  resetPasswordError: null,
  setProfilePictureDisabled: function() {},
};

ProfilePicturePageComponent.propTypes = {
  saveEmailError: propTypes.error,
  savePhoneNumberError: propTypes.error,
  currentUser: propTypes.currentUser,
  currentUserListing: propTypes.ownListing,
  scrollingDisabled: bool.isRequired,
  sendVerificationEmailError: propTypes.error,
  resetPasswordInProgress: bool,
  resetPasswordError: propTypes.error,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  const { currentUser, currentUserListing, currentUserRole } = state.user;
  const {
    image,
    uploadImageError,
    uploadInProgress,
    updateInProgress,
    updateProfileError,
  } = state.ProfilePicturePage;
  return {
    currentUser,
    currentUserListing,
    currentUserRole,
    image,
    scrollingDisabled: isScrollingDisabled(state),
    updateInProgress,
    updateProfileError,
    uploadImageError,
    uploadInProgress,
  };
};

const mapDispatchToProps = dispatch => ({
  onImageUpload: data => dispatch(uploadImage(data)),
  onUpdateProfile: data => dispatch(updateProfile(data)),
});

const ProfilePicturePage = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectIntl
)(ProfilePicturePageComponent);

export default ProfilePicturePage;
