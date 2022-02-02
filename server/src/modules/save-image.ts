import firebase from 'firebase/compat/app';
import { Database } from 'firebase/database';
import { getDownloadURL } from 'firebase/storage';
import { firebaseConfig } from '../db/connection';
import setAccountInformation from './set-account-Information';

firebase.initializeApp(firebaseConfig);

export default async function saveImage(
  fileName: string,
  file: any,
  db: Database,
  id: string,
  storage: firebase.storage.Storage,
): Promise<string> {
  let dawnloadUrl = '';
  if (file) {
    const storageRef = storage.ref().child('/avatar').child(fileName);
    await storageRef.put(file);
    await returnDawnloadUrl(fileName, storage).then((response) => {
      dawnloadUrl = response;
      setAccountInformation(id, db, 'avatarUrl', response);
    });
  }
  return dawnloadUrl;
}

async function returnDawnloadUrl(
  fileName: string,
  storage: firebase.storage.Storage,
): Promise<string> {
  const storageRef = storage.ref('/avatar').child(fileName);
  let dawnloadUrl = '';
  await getDownloadURL(storageRef).then((_dawnloadUrl) => {
    dawnloadUrl = _dawnloadUrl;
  });

  return dawnloadUrl;
}
