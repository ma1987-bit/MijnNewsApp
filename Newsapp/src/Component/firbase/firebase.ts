import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyD4C2kNgIoRdaSFG80SDmaLoq5EdCYhXvA",
    authDomain: "contact-form-d6439.firebaseapp.com",
    projectId: "contact-form-d6439",
    storageBucket: "contact-form-d6439.appspot.com",
    messagingSenderId: "800577752926",
    appId: "1:800577752926:web:f9318bcbe37da8819049cf"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
export default db;



