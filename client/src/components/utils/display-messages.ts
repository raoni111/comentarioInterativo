import CreateMessageProtocol from '../../class/interface/create-message-protocol';
import lscache from 'lscache';
function constructElement(message: CreateMessageProtocol): HTMLDivElement {
  const div = document.createElement('div');
  const div2 = document.createElement('div');
  const h1 = document.createElement('h1');
  const h1_3 = document.createElement('h1');
  const p = document.createElement('p');
  h1_3.classList.add('date');
  div.classList.add('message');
  div2.classList.add('header-message');
  h1.textContent = message.userName;
  h1_3.textContent = message.date;
  p.textContent = message.message;
  div2.appendChild(h1);
  if (message.tag) {
    for (let i = 0; i < message.tag.length; i++) {
      const h1_2 = document.createElement('h1');
      h1_2.classList.add('tag');
      h1_2.classList.add(message.tag[i]);
      h1_2.textContent = message.tag[i];
      div2.appendChild(h1_2);
    }
  }
  div2.appendChild(h1_3);
  div.appendChild(div2);
  div.appendChild(p);
  return div;
}

export default function displayMessages(
  messages: CreateMessageProtocol[] | undefined,
  componentId: string,
): void {
  const user = lscache.get('user');
  if (messages) {
    const elementMessages = document.getElementById(componentId);
    if (elementMessages) {
      elementMessages.textContent = '';
      for (let i = 0; i < messages.length; i += 1) {
        const elementMessage = constructElement(messages[i]);
        if (user.userName === messages[i].userName) {
          elementMessage.classList.add('user');
        }
        elementMessages.appendChild(elementMessage);
      }
    }
  }
}
