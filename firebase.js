// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBhQ1gneCIhqaPrutcmGgB7VRbSkogzYHU",
    authDomain: "facebook-clone-ccd08.firebaseapp.com",
    projectId: "facebook-clone-ccd08",
    storageBucket: "facebook-clone-ccd08.appspot.com",
    messagingSenderId: "128780119886",
    appId: "1:128780119886:web:80ea238efc6b7feea5b81f",
    measurementId: "G-36WQNZXWCJ"
  };

  const app=!firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app();

  const db=app.firestore();
  const storage=firebase.storage();
  const auth=app.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {db,storage,auth,provider};