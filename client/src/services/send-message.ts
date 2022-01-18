import CreateMessage from '../class/create-message-obj';
import CreateMessageProtocol from '../class/interface/create-message-protocol';
import getMessage from './get-message';
import setMessage from './set-message';
import lscache from 'lscache';

export default async function sendMessage(
  message: string,
): Promise<CreateMessageProtocol[]> {
  const user = lscache.get('user');
  const _message = new CreateMessage(
    user.userName,
    message,
    !user.tag ? '' : user.tag,
  );
  let messages: Array<CreateMessageProtocol> = [];
  await getMessage().then((response) => {
    messages = response;
  });
  messages.push(_message);
  await setMessage(messages);
  return messages;
}
