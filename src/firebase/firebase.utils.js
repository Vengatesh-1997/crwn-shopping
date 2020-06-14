import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDaMzYKR4VLqcidFItn-6JJ6rRZX26MjoA",
  authDomain: "crwn-db-fe469.firebaseapp.com",
  databaseURL: "https://crwn-db-fe469.firebaseio.com",
  projectId: "crwn-db-fe469",
  storageBucket: "crwn-db-fe469.appspot.com",
  messagingSenderId: "338916683860",
  appId: "1:338916683860:web:b16bb67478b3c58d953dc1",
  measurementId: "G-EVMT8ZL97D"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
