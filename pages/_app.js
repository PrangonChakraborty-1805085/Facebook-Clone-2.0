// import {Provider} from 'next-auth/client';
import '../styles/globals.css';
import Login from "../components/Login"
import Loading from '../components/Loading'
import {auth,db} from "../firebase"
import {useAuthState} from 'react-firebase-hooks/auth'
import firebase from 'firebase';
import {useEffect} from "react";

function MyApp({ Component, pageProps }) {
  const [user,loading]=useAuthState(auth);

  useEffect(() => {
    if(user){
      console.log('user auth is ',user);
      db.collection('users').doc(user.uid).set({ 
        email:user.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        photoURL:user.photoURL,
      },
       {merge:true},
       )
    }
  }, [user])
  if(loading) return <Loading/>
  if(!user) return <Login/>;
  return <Component {...pageProps} />
  // return (
  //   // <Provider session={pageProps.session}>
  //      <Component {...pageProps} />
  //   // </Provider>
    
  // )
}

export default MyApp
