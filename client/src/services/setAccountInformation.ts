import axios from 'axios';
import setLocalUser from './setLocalUser';

export default async function setAccountInformation(
  userId: string,
  atr: string,
  info: string,
): Promise<void> {
  await axios.get(
    `http://localhost:8080/user/set/information?userId=${userId}&atr=${atr}&info=${info}`,
  );
  setLocalUser(atr, info);
  document.location = '/';
}
