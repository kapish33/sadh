// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import { tables } from "@storage/collection.names";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = config.firebaseConfig;
const firebaseConfig = {
  apiKey: "AIzaSyA6_KMqUn08Lr-ZfytpBT4JEHVebk41k5A",
  authDomain: "sadhna-app-3f875.firebaseapp.com",
  databaseURL:
    "https://sadhna-app-3f875-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sadhna-app-3f875",
  storageBucket: "sadhna-app-3f875.appspot.com",
  messagingSenderId: "335150019899",
  appId: "1:335150019899:web:958c1294ebca875dc2331e",
  measurementId: "G-6LJZYXD98P",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const users = collection(db, tables.users);

// const analytics = getAnalytics(app);
