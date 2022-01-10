import lscache from 'lscache';
import Login from '../class/login';
import Utils from '../class/utils/checks-end-utils';
import validForm from '../class/utils/validForm';

export default async function logIntoAccount(): Promise<void> {
  const userName = document.getElementById('name-user') as HTMLInputElement;
  const password = document.getElementById('password') as HTMLInputElement;
  const login = new Login();
  if (!validForm(userName, password)) {
    return;
  }
  await login.logIn(userName.value, password.value).then((response) => {
    login.logged = response;
  });
  if (!login.logged) {
    Utils.displayError('nome de usuario ou senha incorreto', password);
    return;
  }
  // 10080
  lscache.set('user', login.infoUser, 30);
  document.location = '/';
}
