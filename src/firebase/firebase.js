import * as firebase from 'firebase';

export const firebaseConfig = {
  apiKey: 'AIzaSyB0PBMBDCfHW8z9dpcCuhkbXul-Bcgza1w',
  authDomain: 'react-cryptocurrency-monitor.firebaseapp.com',
  databaseURL: 'https://react-cryptocurrency-monitor.firebaseio.com',
  messagingSenderId: '1096975400354',
  projectId: 'react-cryptocurrency-monitor',
  storageBucket: 'react-cryptocurrency-monitor.appspot.com'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();

export { db };
