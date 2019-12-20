import firebase from 'firebase'

const firebaseApp = firebase
const firebaseConfig = {
    apiKey: "AIzaSyBF50BnYFXOHjRVg0MHlXtvgehXUdgsgKw",
    authDomain: "organize-my-apps.firebaseapp.com",
    databaseURL: "https://organize-my-apps.firebaseio.com",
    projectId: "organize-my-apps",
    storageBucket: "organize-my-apps.appspot.com",
    messagingSenderId: "368930279258",
    appId: "1:368930279258:web:8bb484cbb66c43171e6d63",
    measurementId: "G-F5WMXPDK22"
  };

  if(!firebaseApp.apps.length) {
      firebaseApp.initializeApp(firebaseConfig);
  }
  firebaseApp.analytics();
  export default firebaseApp