// app.js - handles auth, navigation guards, generator, save & download
import { auth, db } from './firebase.js';
import { 
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged 
} from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js';
import { setDoc, doc } from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js';

// Signup handler (used on signup.html)
export async function signupHandler(email, password, displayName){
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  // optional: save profile in Firestore
  await setDoc(doc(db, 'users', cred.user.uid), { email, displayName: displayName || null, createdAt: new Date().toISOString() });
  return cred.user;
}

// Login handler
export async function loginHandler(email, password){
  const u = await signInWithEmailAndPassword(auth, email, password);
  return u.user;
}

// Logout
export async function logoutHandler(){
  await signOut(auth);
}

// protect page - redirect to login if not authenticated
export function protectPage(redirectTo='login.html'){
  onAuthStateChanged(auth, user => {
    if(!user) location.href = redirectTo;
  });
}

// Save generated receipt to Firestore under users/{uid}/receipts/{id}
export async function saveReceiptForUser(data){
  const user = auth.currentUser;
  if(!user) throw new Error('Not authenticated');
  const id = 'r_' + Date.now();
  await setDoc(doc(db, 'users', user.uid, 'receipts', id), { ...data, createdAt: new Date().toISOString() });
  return id;
}
