import React, { useEffect } from 'react';
import './style/chat-style.css';

//icons
import { IoSend } from 'react-icons/io5';
import { icons } from 'react-icons';

interface Props {
  user: any;
}
export default function Chat(props: Props): JSX.Element {
  useEffect(() => {
    const messageConponent = document.getElementById(
      'messages-content',
    ) as HTMLDivElement;
    messageConponent.scrollTop = messageConponent?.scrollHeight;
  }, []);

  return (
    <div className="chat-component">
      <div className="chat-content">
        <div className="messages-content" id="messages-content">
          <div className="message">
            <div className="header-message">
              <h1>Raoni_157</h1>
              <h1>Dev</h1>
            </div>
            <div className="body-message">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                illo magni quisquam accusamus sed ea itaque incidunt impedit
                sunt, fugit laborum adipisci qui blanditiis neque. Ullam
                consequatur sit voluptas fugiat!
              </p>
            </div>
          </div>
          <div className="message">
            <div className="header-message">
              <h1>Raoni_157</h1>
              <h1>Dev</h1>
            </div>
            <div className="body-message">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                illo magni quisquam accusamus sed ea itaque incidunt impedit
                sunt, fugit laborum adipisci qui blanditiis neque. Ullam
                consequatur sit voluptas fugiat!
              </p>
            </div>
          </div>
          <div className="message">
            <div className="header-message">
              <h1>Raoni_157</h1>
              <h1>Dev</h1>
            </div>
            <div className="body-message">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                illo magni quisquam accusamus sed ea itaque incidunt impedit
                sunt, fugit laborum adipisci qui blanditiis neque. Ullam
                consequatur sit voluptas fugiat!
              </p>
            </div>
          </div>
          <div className="message">
            <div className="header-message">
              <h1>Raoni_157</h1>
              <h1>Dev</h1>
            </div>
            <div className="body-message">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                illo magni quisquam accusamus sed ea itaque incidunt impedit
                sunt, fugit laborum adipisci qui blanditiis neque. Ullam
                consequatur sit voluptas fugiat!
              </p>
            </div>
          </div>
          <div className="message">
            <div className="header-message">
              <h1>Raoni_157</h1>
              <h1>Dev</h1>
            </div>
            <div className="body-message">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                illo magni quisquam accusamus sed ea itaque incidunt impedit
                sunt, fugit laborum adipisci qui blanditiis neque. Ullam
                consequatur sit voluptas fugiat!
              </p>
            </div>
          </div>
          <div className="message">
            <div className="header-message">
              <h1>Raoni_157</h1>
              <h1>Dev</h1>
            </div>
            <div className="body-message">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                illo magni quisquam accusamus sed ea itaque incidunt impedit
                sunt, fugit laborum adipisci qui blanditiis neque. Ullam
                consequatur sit voluptas fugiat!
              </p>
            </div>
          </div>
          <div className="message">
            <div className="header-message">
              <h1>Raoni_157</h1>
              <h1>Dev</h1>
            </div>
            <div className="body-message">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                illo magni quisquam accusamus sed ea itaque incidunt impedit
                sunt, fugit laborum adipisci qui blanditiis neque. Ullam
                consequatur sit voluptas fugiat!
              </p>
            </div>
          </div>
          <div className="message">
            <div className="header-message">
              <h1>Raoni_157</h1>
              <h1>Dev</h1>
            </div>
            <div className="body-message">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                illo magni quisquam accusamus sed ea itaque incidunt impedit
                sunt, fugit laborum adipisci qui blanditiis neque. Ullam
                consequatur sit voluptas fugiat!
              </p>
            </div>
          </div>
          <div className="message">
            <div className="header-message">
              <h1>Raoni_157</h1>
              <h1>Dev</h1>
            </div>
            <div className="body-message">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                illo magni quisquam accusamus sed ea itaque incidunt impedit
                sunt, fugit laborum adipisci qui blanditiis neque. Ullam
                consequatur sit voluptas fugiat!
              </p>
            </div>
          </div>
          <div className="message">
            <div className="header-message">
              <h1>Raoni_157</h1>
              <h1>Dev</h1>
            </div>
            <div className="body-message">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                illo magni quisquam accusamus sed ea itaque incidunt impedit
                sunt, fugit laborum adipisci qui blanditiis neque. Ullam
                consequatur sit voluptas fugiat!
              </p>
            </div>
          </div>
        </div>
        <div className="post-message-content">
          <input type="text"></input>
          <button type="button">
            <IoSend className="icon-send-message" size="20" />
          </button>
        </div>
      </div>
    </div>
  );
}
