import { ValidationError } from "express-validator";

export default class ApiError extends Error {
  public status;
  public errors;

  constructor(
    status: number,
    message: string,
    errors: Error[] | ValidationError[] = []
  ) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new ApiError(401, "User is not authorized");
  }

  static BadRequest(message: string, errors: Error[] | ValidationError[] = []) {
    return new ApiError(400, message, errors);
  }
}
