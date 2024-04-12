export default class UserDto {
  public email: string;
  public id: number;
  public isActivated: boolean;

  constructor(model: DUser) {
    this.email = model.email;
    this.id = model.user_id;
    this.isActivated = model.is_activated;
  }
}
