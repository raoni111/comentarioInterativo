export default function setLocalUser(atr: string, info: string): void {
  const user = lscache.get('user');
  user[atr] = info;
  console.log(info);
  lscache.set('user', user);
}
