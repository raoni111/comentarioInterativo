/* eslint-disable react/jsx-key */
import { executionAsyncResource } from 'async_hooks';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoSend } from 'react-icons/io5';
import MessageProtocol from '../class/interface/message-protocol';
import './style/chat-style.css';
import displayMessages from './utils/display-messages';
// eslint-disable-next-line @typescript-eslint/no-var-requires

interface Props {
  user: any;
  socket: any;
}
export default function Chat(props: Props): JSX.Element {
  const { user } = props;
  const [message, setMessage] = useState('');
  useEffect(() => {
    updateMessages().then((response) => {
      displayMessages(response, 'messages-content');
      setWidthScroll();
    });
    const addNewMessage = (data: any) => {
      displayMessages(data, 'messages-content');
      setWidthScroll();
    };
    props.socket.on('chat.message', addNewMessage);
    return () => props.socket.off('chat.message', addNewMessage);
  }, []);

  async function updateMessages(): Promise<MessageProtocol[]> {
    let messages: MessageProtocol[] = [];
    await axios
      .get('http://localhost:8080/get/message')
      .then((response: MessageProtocol[] | any) => {
        if (response.data) {
          messages = response.data;
        }
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
    props.socket.emit('chat.message', {
      message: message,
      user,
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
