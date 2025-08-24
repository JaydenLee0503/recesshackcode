// src/App.js
import React, {useEffect} from 'react';
import './App.css';
import HomePage from './Views/HomePage';
import {useAuth0} from '@auth0/auth0-react';
import {db} from './firebase';
import {doc, setDoc} from 'firebase/firestore';

function App() {
  const {user, isAuthenticated} = useAuth0();

  useEffect(() =>{
    const saveUser = async() =>{
      if(isAuthenticated && user){
        try{
          const userRef = doc(db, 'users', user.sub); // Auth0 unique ID
          await setDoc(userRef, {
            name: user.name,
            email: user.email,
            picture: user.picture,
            lastLogin: new Date().toISOString()
          }, {merge: true});
        } catch(err){
          console.error('Error saving user to Firestore:', err);
        }
      }
    };
    saveUser();
  }, [isAuthenticated, user]);

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
