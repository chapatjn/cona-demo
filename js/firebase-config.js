const firebaseConfig = {
  apiKey:            "AIzaSyB38S_aoKjRxDT1aqwSvsIXAThDluXLzV8",
  authDomain:        "cona-demo-organizador.firebaseapp.com",
  projectId:         "cona-demo-organizador",
  storageBucket:     "cona-demo-organizador.firebasestorage.app",
  messagingSenderId: "361830950732",
  appId:             "1:361830950732:web:bec79733de159f52d411e9"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
