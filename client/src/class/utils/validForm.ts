import ValidFormLogin from '../valid-form-login';
export default function validForm(
  userName: HTMLInputElement,
  password: HTMLInputElement,
): boolean {
  const validFormLogin = new ValidFormLogin(userName, password);
  return validFormLogin.checkout();
}
