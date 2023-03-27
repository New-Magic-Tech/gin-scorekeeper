// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, query, where, getDocs, updateDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../firebaseConfig";





const firebaseApp = initializeApp(firebaseConfig);


const auth = getAuth();
export const goCreateUserWithEmailAndPassword = async (email, password) => 
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log('signed in')
    // Signed in 
    const user = userCredential.user;
    console.log('user', user)
    return user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const signInWithGooglePopup = async () => 
signInWithPopup(auth, provider)
.then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log ('user in firebase', user)
    return user
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


/*export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const name = 'displayName'
        const pairings = []

        try {
            await setDoc(userDocRef,
                {
                    email,
                    name,
                    pairings,
                });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}

export const getUserDoc = async (userAuth) => {
    const docRef = doc(db, 'users', userAuth.uid);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

export const getUserDocRef = async (userAuth) => {
    const docRef = doc(db, 'users', userAuth.uid);
    return docRef;
}




export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)*/