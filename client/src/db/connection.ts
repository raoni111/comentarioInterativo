import firebase from 'firebase/compat/app';
import { getDatabase } from 'firebase/database';
import 'firebase/compat/storage';

// database

const _apiKey = process.env.REACT_APP_APIKEY;
const _authDomain = process.env.REACT_APP_AUTHDOMAIN;
const _databaseURL = process.env.REACT_APP_DATABASEURL;
const _projectId = process.env.REACT_APP_PROJECTID;
const _storageBucket = process.env.REACT_APP_STOREGEBUCKET;
const _messagingSenderId = process.env.REACT_APP_MESSAGINGSENDERID;
const _appId = process.env.REACT_APP_APPID;
const _measurementId = process.env.REACT_APP_MEASUREMENTID;

export const firebaseConfig = {
  apiKey: _apiKey,
  authDomain: _authDomain,
  databaseURL: _databaseURL,
  projectId: _projectId,
  storageBucket: _storageBucket,
  messagingSenderId: _messagingSenderId,
  appId: _appId,
  measurementId: _measurementId,
};
const app = firebase.initializeApp(firebaseConfig);
export const db = getDatabase(app);
//https://firebasestorage.googleapis.com/v0/b/comentario-interativo.appspot.com/o/vatar%2FSlice%201.png?alt=media&token=d65dc85c-ae59-43d7-acc5-41b8c0a2a687
//https://firebasestorage.googleapis.com/v0/b/comentario-interativo.appspot.com/o/vatar%2FSlice%204.png?alt=media&token=8be09ece-8c7f-46fa-8bd5-c5222e6e07a4

// storage

export const storage = firebase.storage(app);
