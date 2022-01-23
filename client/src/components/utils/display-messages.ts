import lscache from 'lscache';
import CreateMessageProtocol from '../../class/interface/create-message-protocol';

function createElement(
  _element: string,
  _textContent: string,
  ..._classNames: string[]
): HTMLElement {
  const element = document.createElement(_element);
  if (_classNames) {
    _classNames.forEach((value: string) => {
      element.classList.add(value);
    });
  }
  element.textContent = _textContent;
  return element;
}

function constructElement(message: CreateMessageProtocol): HTMLDivElement {
  const div = createElement('div', '', 'message') as HTMLDivElement;
  const div2 = createElement('div', '', 'header-message');
  const h1 = createElement('h1', message.userName);
  const h1_3 = createElement('h1', message.date, 'date');
  const p = createElement('p', message.message);
  div2.appendChild(h1);
  if (message.tag) {
    message.tag.forEach((value) => {
      const h1_2 = createElement('h1', value, 'tag', value);
      div2.appendChild(h1_2);
    });
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

      messages.forEach((value: CreateMessageProtocol): void => {
        const elementMessage = constructElement(value);
        if (user.userName === value.userName) {
          elementMessage.classList.add('user');
        }
        elementMessages.appendChild(elementMessage);
      });
    }
  }
}
