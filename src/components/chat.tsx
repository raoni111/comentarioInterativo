/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { IoSend } from 'react-icons/io5';
import CreateMessageProtocol from '../class/interface/create-message-protocol';
import getMessage from '../services/get-message';
import sendMessage from '../services/send-message';
import './style/chat-style.css';
import displayMessages from './utils/display-messages';

interface Props {
  user: any;
}
export default function Chat(props: Props): JSX.Element {
  const { user } = props;
  const [message, setMessage] = useState('');
  useEffect(() => {
    updateMessages().then((response) => {
      displayMessages(response, 'messages-content', user.userName);
      setWidthScroll();
    });
  }, []);

  async function updateMessages(): Promise<CreateMessageProtocol[]> {
    let messages: CreateMessageProtocol[] = [];
    await getMessage().then((response) => {
      messages = response;
    });
    return messages;
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
    sendMessage(user, message).then((response) => {
      displayMessages(response, 'messages-content', user.userName);
      setWidthScroll();
    });
    messageElement.value = '';
    return;
  }
  return (
    <div className="chat-component">
      <div className="chat-content">
        <div className="messages-content" id="messages-content"></div>
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
