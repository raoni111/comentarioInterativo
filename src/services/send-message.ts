import CreateMessage from '../class/create-message-obj';
import CreateMessageProtocol from '../class/interface/create-message-protocol';
import getMessage from './get-message';
import setMessage from './set-message';

export default async function sendMessage(
  user: any,
  message: string,
): Promise<CreateMessageProtocol[]> {
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
