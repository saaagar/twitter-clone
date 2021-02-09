import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDsno7bawhsPhTXsuF9GNj8LDKJFCS_3Sw",
    authDomain: "twitter-clone-991b2.firebaseapp.com",
    projectId: "twitter-clone-991b2",
    storageBucket: "twitter-clone-991b2.appspot.com",
    messagingSenderId: "126700705119",
    appId: "1:126700705119:web:131588c8102b944aa252ea",
    measurementId: "G-LJX35KFTXS"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  export default db;