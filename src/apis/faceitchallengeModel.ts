export interface UserResponse {
  createdAt: Date;
  name: string;
  avatar: string;
  phoneNumber: string;
  id: string;
}

export interface PostsResponse {
  createdAt: Date;
  body: string;
  avatar: string;
  title: string;
  id: string;
  userId: string;
}
