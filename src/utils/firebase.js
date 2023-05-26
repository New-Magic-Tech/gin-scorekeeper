// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, query, where, getDocs, updateDoc, arrayUnion } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../firebaseConfig";





const firebaseApp = initializeApp(firebaseConfig);


const auth = getAuth();

let uid;

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    uid = user.uid;
    console.log('authChanged', user)
  } else {
    // User is signed out
    // ...
  }
});


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

export const goSignInWithEmailAndPassword = async (email, password) =>
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    return user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw new Error(errorCode)
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

 export const goSignOut = async() => 
 signOut(auth)
 .then(() => {
    return true
  }).catch((error) => {
    throw new Error(error.code)
  });

  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (user) => { 
    const userDocRef = doc(db, 'users', user.uid);  
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = user;
        const name = displayName
        const games = []

        try {
            await setDoc(userDocRef,
                {
                    email,
                    name,
                    games,
                });
           return {email, name, games}
                
        } catch (error) {
            console.log('error creating the user', error.message);
            return null;
        }
    }

      return userSnapshot.data();
}

export const updateUserDocument = async (user, data) => {
    const userDocRef = doc(db, 'users', user.uid);
    try {
        await updateDoc(userDocRef, data);
        return true;
    } catch (error) {
        console.log('error updating the user', error.message);
        return null;
    }
}

export const addGameToUser = async (game) => {
    const userDocRef = doc(db, 'users', uid);
    try {
        await updateDoc(userDocRef, {
          games: arrayUnion(game)
        });
        return true;
    } catch (error) {
        console.log('error updating the user', error.message);
        return null;
    }
}






/*



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