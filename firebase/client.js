import * as firebase from 'firebase';
import firebaseConfig from '../firebaseConfig';

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {}

const mapUser = (user) => {
  if (user) {
    const { displayName, photoURL, email } = user;
    return {
      displayName,
      photoURL,
      email,
    };
  }
  return user;
};

export const getUserState = (state = () => {}) =>
  firebase.auth().onAuthStateChanged((user) => state(mapUser(user)));

export const githubLoginStrategy = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
};
