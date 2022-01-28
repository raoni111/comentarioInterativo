import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import React, { useEffect, useRef, useState } from 'react';
import { BiImageAdd } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { firebaseConfig } from '../db/connection';
import setLocalUser from '../services/setLocalUser';
import './assets/style/configuration-avatar.css';

firebase.initializeApp(firebaseConfig);

interface Props {
  readonly socket: any;
}

export default function ConfigurationAvatar(props: Props): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<FileList | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setUserId(urlParams.get('userId'));
    const localSaveImage = (data: any) => {
      setLocalUser('avatarUrl', data.dawnloadUrl);
    };
    props.socket.on('save.image', localSaveImage);
    return () => props.socket.off('chat.message', localSaveImage);
  }, []);

  const hundleSave = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (files) {
      const file = files[0];
      props.socket.emit('save.image', {
        userId: userId,
        file: file,
        fileName: file.name,
      });
    }
  };

  function hundleChange(files: FileList | null) {
    setFiles(files);
  }

  return (
    <form className="configuration-component" onSubmit={hundleSave}>
      <div className="configuration-content">
        <div className="content-one-avatar">
          <Link to={`/configuration`}>Perfil</Link>
          <a>Avatar</a>
        </div>
        <div className="form-content">
          <div className="input-file-content">
            <label htmlFor="input-file">
              Escolha um imagem para o seu avatar
            </label>
            <div>
              <label htmlFor="input-file">
                <BiImageAdd size="40" />
              </label>
              <input
                type="file"
                name=""
                id="input-file"
                ref={inputRef}
                accept="image/png, image/jpeg"
                onChange={(e) => hundleChange(e.target.files)}
              />
            </div>
          </div>
          <div className="save-button-content">
            <button type="submit">Salvar</button>
          </div>
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
