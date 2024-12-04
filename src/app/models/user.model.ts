export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface Profile extends User {
  creationAt: string;
  updatedAt: string;
}

export interface UpdateProfile {
  email: string,
  name: string,
  avatar: string
}
