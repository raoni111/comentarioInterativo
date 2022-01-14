import CreateMessage from '../class/create-message-obj';
import getMessage from './get-message';
import setMessage from './set-message';

export default async function sendMessage(
  user: any,
  message: string,
): Promise<void> {
  const _message = new CreateMessage(
    user.userName,
    message,
    !user.tag ? '' : user.tag,
  );
  let messages: Array<any> = [];
  await getMessage().then((response) => {
    messages = response;
  });
  messages.push(_message);
  await setMessage(messages);
}
