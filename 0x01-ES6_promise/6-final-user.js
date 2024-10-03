import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  signUpUser(firstName, lastName);
  uploadPhoto(fileName);
  return Promise.all([signUpUser(), uploadPhoto()]).then((value) => [
    {
      status: Promise.status(),
      value: Promise.resolve ? value : Error,
    },
  ]);
}
