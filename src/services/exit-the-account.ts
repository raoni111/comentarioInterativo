import lscache from 'lscache';

export default function exitTheAccount(key: string): void {
  lscache.remove(key);
  document.location = '/';
}
