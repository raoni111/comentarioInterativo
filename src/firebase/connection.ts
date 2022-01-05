import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from 'firebase/database';

const _apiKey = process.env.REACT_APP_APIKEY;
const _authDomain = process.env.REACT_APP_AUTHDOMAIN;
const _databaseURL = process.env.REACT_APP_DATABASEURL;
const _projectId = process.env.REACT_APP_PROJECTID;
const _storageBucket = process.env.REACT_APP_STOREGEBUCKET;
const _messagingSenderId = process.env.REACT_APP_MESSAGINGSENDERID;
const _appId = process.env.REACT_APP_APPID;
const _measurementId = process.env.REACT_APP_MEASUREMENTID;

const firebaseConfig = {
  apiKey: _apiKey,
  authDomain: _authDomain,
  databaseURL: _databaseURL,
  projectId: _projectId,
  storageBucket: _storageBucket,
  messagingSenderId: _messagingSenderId,
  appId: _appId,
  measurementId: _measurementId,
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// function writeUserData(
//   userId: string,
//   name: string,
//   email: string,
//   imageUrl: string,
// ): void {
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//     profile_picture: imageUrl,
//   });
// }
//writeUserData('----', '----', '----', '----');

//const bdRef = ref(db);
// get(child(bdRef, 'users/12321d1223'))
//   .then((response) => {
//     console.log(response.val());
//   })
//   .catch((error) => {
//     console.log(error);
//   });
