import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCqZXd1K3pyNg_IjFKhboLgrIFHzuQQPPA",
  authDomain: "teamvotingapp-6b184.firebaseapp.com",
  databaseURL: "https://teamvotingapp-6b184-default-rtdb.firebaseio.com",
  projectId: "teamvotingapp-6b184",
  storageBucket: "teamvotingapp-6b184.appspot.com",
  messagingSenderId: "1062256838050",
  appId: "1:1062256838050:web:35b37d6eeb401d2b739efb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();