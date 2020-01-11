import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCg8Bg_tUDbkLoe5PoG4xUwnvUzncSJYOw",
    authDomain: "w-react-ecommerce.firebaseapp.com",
    databaseURL: "https://w-react-ecommerce.firebaseio.com",
    projectId: "w-react-ecommerce",
    storageBucket: "w-react-ecommerce.appspot.com",
    messagingSenderId: "112496734429",
    appId: "1:112496734429:web:945ed47ecf0dd1b209eb34",
    measurementId: "G-M5GHLW56CD"
};
export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const userSnapshot = await userRef.get();
    if (!userSnapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (err) {
            console.log(err);
        }
    }
    return userRef;

}
firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;