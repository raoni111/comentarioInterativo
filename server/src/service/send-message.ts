import CreateMessage from '../class/create-message-obj';
import CreateMessageProtocol from '../class/interface/create-message-protocol';
import getMessage from '../models/get-message';
import setMessage from '../models/set-message';

export default async function sendMessage(
  message: string,
  user: any,
): Promise<CreateMessageProtocol[]> {
  const _message = new CreateMessage(
    user.userName,
    message,
    !user.tag ? '' : user.tag,
  );
  let messages: CreateMessageProtocol[] = [];
  await getMessage().then((response) => {
    messages = response;
  });
  messages.push(_message);
  await setMessage(messages);
  return messages;
}
