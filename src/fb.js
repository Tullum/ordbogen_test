import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web apps Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCpuxl0-Hix4CRPRkkhgHSzG1fQlQLMPmw',
  authDomain: 'ordbogstesten.firebaseapp.com',
  databaseURL: 'https://ordbogstesten.firebaseio.com',
  projectId: 'ordbogstesten',
  storageBucket: 'ordbogstesten.appspot.com',
  messagingSenderId: '346633970433',
  appId: '1:346633970433:web:fbf90df0792f356cb03100'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })
export default db
