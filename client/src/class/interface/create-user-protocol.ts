export default interface CreateUserProtocol {
  userName: string;
  name: string;
  email: string;
  password: string;
  userId: string;
  date: {
    localDateString: string;
    localTimeString: string;
  };
}
