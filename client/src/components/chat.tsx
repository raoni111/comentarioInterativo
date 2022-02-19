/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { IoSend } from 'react-icons/io5';
import { MdDeleteForever } from 'react-icons/md';
import MessageProtocol from '../class/interface/message-protocol';
import './style/chat-style.css';
import deleteMessage from './utils/delete-message';
import updateMessages from './utils/update-message';

const apiKey = process.env.REACT_APP_MYAPIKEY;

interface Props {
  user: any;
  socket: any;
}
export default function Chat(props: Props): JSX.Element {
  const { user } = props;
  const [message, setMessage] = useState<string>();
  const [messages, setMessages] = useState<MessageProtocol[]>();

  useEffect(() => {
    if (!user) {
      return;
    }
    updateMessages().then((response) => {
      setMessages(response);
      setWidthScroll();
    });
    const addNewMessage = (data: any) => {
      setMessages(data);
      setWidthScroll();
    };
    props.socket.on('chat.message', addNewMessage);
    return () => props.socket.off('chat.message', addNewMessage);
  }, []);

  const MessagesElement = (): JSX.Element[] => {
    if (!messages) {
      return [];
    }
    return messages.map((message, index) => (
      <div className={'message ' + index}>
        <div className="header-message">
          <div className="header-content-one">
            <h1>{message.userName ? message.userName : ''}</h1>
            {message.tag
              ? message.tag.map((value) => (
                  <h1 className={'tag ' + value}>{value}</h1>
                ))
              : ''}
            <h1 className="date">{message.date}</h1>
          </div>
          {message.userName === user.userName ? (
            <div className="delet-button-content">
              <button
                id={`${index}`}
                className="delet-button"
                onClick={() => hundleClick(index)}
              >
                <MdDeleteForever size="20" />
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
        <p>{message.message}</p>
      </div>
    ));
  };

  async function hundleClick(index: number): Promise<void> {
    await deleteMessage(index, props.socket);
  }

  function setWidthScroll(): void {
    const messageConponent = document.getElementById(
      'messages-content',
    ) as HTMLDivElement;
    messageConponent.scrollTop = messageConponent?.scrollHeight;
  }

  function verifyMessage(): void {
    const messageElement = document.getElementById(
      'input-message',
    ) as HTMLInputElement;
    if (!user) {
      return;
    }
    if (!message) {
      return;
    }
    props.socket.emit('chat.message', {
      message: message,
      user,
    });
    messageElement.value = '';
    setMessage('');
    return;
  }
  return (
    <div className="chat-component">
      <div className="chat-content">
        <div className="messages-content" id="messages-content">
          {MessagesElement()?.map((value) => value)}
        </div>
        <div className="post-message-content">
          <input
            type="text"
            id="input-message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Escreva um menssagem"
          ></input>
          <button type="button" onClick={verifyMessage}>
            <IoSend className="icon-send-message" size="20" />
          </button>
        </div>
      </div>
    </div>
  );
}
