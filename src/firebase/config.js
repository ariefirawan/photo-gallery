import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDUvpe5cAZrNiwDeGRCWy_QqUOQpLAKmRc',
  authDomain: 'photo-gallery-f00c4.firebaseapp.com',
  databaseURL: 'https://photo-gallery-f00c4.firebaseio.com',
  projectId: 'photo-gallery-f00c4',
  storageBucket: 'photo-gallery-f00c4.appspot.com',
  messagingSenderId: '772684288143',
  appId: '1:772684288143:web:9f815b352b5a7a3549e0fa',
  measurementId: 'G-BVHCM9LWTL',
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore()

export (projectStorage, projectFirestore)
