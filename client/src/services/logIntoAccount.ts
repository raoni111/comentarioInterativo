import lscache from 'lscache';
import axios from 'axios';
import Utils from '../class/utils/checks-end-utils';
import validForm from '../class/utils/validForm';

export default async function logIntoAccount(): Promise<void> {
  const userNameElement = document.getElementById(
    'name-user',
  ) as HTMLInputElement;
  const passwordElement = document.getElementById(
    'password',
  ) as HTMLInputElement;
  if (!validForm(userNameElement, passwordElement)) {
    return;
  }
  const userName = userNameElement.value;
  const password = passwordElement.value;
  await axios
    .get(
      `http://localhost:8080/user/login?userName=${userName}&password=${password}`,
    )
    .then((response) => {
      if (response.data.error) {
        Utils.displayError(
          'nome de usuario ou senha incorreto',
          passwordElement,
        );
        return;
      }
      lscache.set('user', response.data.user, 30);
      document.location = '/';
    });
}
