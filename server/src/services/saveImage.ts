import firebase from 'firebase/compat/app';
import { Database } from "firebase/database";
import { firebaseConfig } from "../db/connection";
import setAccountInformation from "./setAccountInformation";

firebase.initializeApp(firebaseConfig);

export default function saveImage(file: any, db: Database, id: string, storage: firebase.storage.Storage): string {
    let dawnloadUrlUrl = '';
    console.log(file.name);
    if (file) {
        const storageRef = storage.ref().child('/avatar').child(file.name);
        const storageTack = storageRef.put(file);
        storageTack.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
          storageTack.snapshot.ref.getDownloadURL().then((_dawnloadUrl) => {
            if (id) {
              setAccountInformation(id, db,'avatarUrl', _dawnloadUrl);
              dawnloadUrlUrl = _dawnloadUrl;
            }
          });
        });
    }
    console.log(file.name);
    return dawnloadUrlUrl;
}