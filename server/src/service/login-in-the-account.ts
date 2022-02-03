import Login from '../class/login';

export async function loginInTheAccount(
  userName: any,
  password: any,
): Promise<any> {
  const login = new Login();
  let _logged = false;
  let error = false;
  await login.logIn(userName, password).then((response) => {
    _logged = response;
  });
  if (!_logged) {
    error = true;
    return { error };
  }
  const user = login.infoUser;
  return {
    error: error,
    user,
  };
}
