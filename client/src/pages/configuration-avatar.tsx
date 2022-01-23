import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { firebaseConfig, storage } from '../db/connection';
import setAccountInformation from '../services/setAccountInformation';

firebase.initializeApp(firebaseConfig);

export default function ConfigurationAvar(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<FileList | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setUserId(urlParams.get('userId'));
  }, []);

  const hundleSave = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (files) {
      const file = files[0];
      console.log(file);
      const storageRef = storage.ref().child('/avatar').child(file.name);
      const storageTack = storageRef.put(file);
      storageTack.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
        storageTack.snapshot.ref.getDownloadURL().then((_dawnloadUrl) => {
          if (userId) {
            console.log(userId);
            setAccountInformation(userId, 'avatarUrl', _dawnloadUrl);
          }
        });
      });
    }
  };

  function hundleChange(files: FileList | null) {
    setFiles(files);
  }

  return (
    <form className="configuration-component" onSubmit={hundleSave}>
      <div className="configuration-content">
        <div className="content-one">
          <Link to={`/configuration`}>Perfil</Link>
          <a>Avatar</a>
        </div>
        <div className="form-content">
          <div className="name-content">
            <label htmlFor="name">Escolha um imagem para o seu avatar</label>
            <div>
              <input
                type="file"
                name=""
                id=""
                ref={inputRef}
                accept="image/png, image/jpeg"
                onChange={(e) => hundleChange(e.target.files)}
              />
            </div>
          </div>
        </div>
        <div className="save-button-content">
          <button type="submit">Salvar</button>
        </div>
      </div>
      <div className="button-back-content">
        <Link to="/">
          <button type="button">Voltar</button>
        </Link>
      </div>
    </form>
  );
}
