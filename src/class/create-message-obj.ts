import CreateMessageProtocol from './interface/create-message-protocol';

export default class CreateMessage implements CreateMessageProtocol {
  public date: string;
  constructor(
    public userName: string,
    public message: string,
    public tag?: string,
  ) {
    const date = new Date();
    this.date = date.toLocaleDateString('pt-Br', { timeZone: 'UTC' });
  }
}
