export default class UserDto {
  public username: string;
  public email: string;
  public id: number;
  public isActivated: boolean;

  constructor(model: DUser) {
    this.username = model.username;
    this.email = model.email;
    this.id = model.user_id;
    this.isActivated = model.is_activated;
  }
}
