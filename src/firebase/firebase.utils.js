import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyASvtWfVxnL-hRYL_7qzH13C9H4XgWAcYY",
    authDomain: "crown-cb.firebaseapp.com",
    databaseURL: "https://crown-cb.firebaseio.com",
    projectId: "crown-cb",
    storageBucket: "crown-cb.appspot.com",
    messagingSenderId: "735499243084",
    appId: "1:735499243084:web:344b20d82889cea225aee9",
    measurementId: "G-5MWWY9TRPW"
}

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