import firebase from 'firebase/compat/app';
import { get, getDatabase  } from 'firebase/database';
import 'firebase/compat/storage';
require('dotenv').config();

const _apiKey = process.env.APIKEY;
const _authDomain = process.env.AUTHDOMAIN;
const _databaseURL = process.env.DATABASEURL;
const _projectId = process.env.PROJECTID;
const _storageBucket = process.env.STOREGEBUCKET;
const _messagingSenderId = process.env.MESSAGINGSENDERID;
const _appId = process.env.APPID;
const _measurementId = process.env.MEASUREMENTID;

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

export const storage = firebase.storage(app);