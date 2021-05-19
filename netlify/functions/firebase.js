const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCELJhSHF0W3Eqos3FjVq09WygGj_X9PHI",
  authDomain: "homework7-f4d62.firebaseapp.com",
  projectId: "homework7-f4d62",
  storageBucket: "homework7-f4d62.appspot.com",
  messagingSenderId: "265713387390",
  appId: "1:265713387390:web:c59ff4372185e4e51cd52f"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase