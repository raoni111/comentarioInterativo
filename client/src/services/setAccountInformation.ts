import axios from 'axios';
import setLocalUser from './setLocalUser';

const apiKey = process.env.REACT_APP_MYAPIKEY;

export default async function setAccountInformation(
  userId: string,
  atr: string,
  info: string,
): Promise<void> {
  await axios.get(
    `http://localhost:8080/user/set/information?userId=${userId}&atr=${atr}&info=${info}&apiKey=${apiKey}`,
  );
  setLocalUser(atr, info);
  document.location = '/';
}
