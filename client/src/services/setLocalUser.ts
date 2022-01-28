import lscache from 'lscache';

export default function setLocalUser(atr: string, info: string): void {
  const user = lscache.get('user');
  user[atr] = info;
  console.log(atr, info);
  lscache.set('user', user);
  document.location = '/';
}
