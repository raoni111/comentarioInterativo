import axios from 'axios';
import MessageProtocol from '../../class/interface/message-protocol';

const apiKey = process.env.REACT_APP_MYAPIKEY;

export default async function updateMessages(): Promise<MessageProtocol[]> {
  let messages: MessageProtocol[] = [];
  await axios
    .get(`http://localhost:8080/get/message?apiKey=${apiKey}`)
    .then((response: MessageProtocol[] | any) => {
      if (response.data) {
        messages = response.data;
      }
    });
  return messages;
}
