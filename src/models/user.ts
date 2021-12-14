import { UserResponse } from "../apis";

interface User {
  userResponse?: UserResponse;
}

export type UserState = Readonly<User>;
