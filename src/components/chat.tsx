/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { IoSend } from 'react-icons/io5';
import getMessage from '../services/get-message';
import sendMessage from '../services/send-message';
import './style/chat-style.css';

interface Props {
  user: any;
}
export default function Chat(props: Props): JSX.Element {
  const { user } = props;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>();

  useEffect(() => {
    const messageConponent = document.getElementById(
      'messages-content',
    ) as HTMLDivElement;
    messageConponent.scrollTop = messageConponent?.scrollHeight;
  }, []);

  function verifyMessage(): void {
    if (!user) {
      return;
    }
    sendMessage(user, message);
    return;
  }

  return (
    <div className="chat-component">
      <div className="chat-content">
        <div className="messages-content" id="messages-content"></div>
        <div className="post-message-content">
          <input
            type="text"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></input>
          <button type="button" onClick={verifyMessage}>
            <IoSend className="icon-send-message" size="20" />
          </button>
        </div>
      </div>
    </div>
  );
}
