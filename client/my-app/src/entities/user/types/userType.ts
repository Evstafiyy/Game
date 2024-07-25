export type User = {
  id: number;
  email: string;
  name: string;
};

// Юзер без id
export type UserWithoutId = Omit<User, 'id'>;
// Юзер с паролем
export type UserRegistrationForm = UserWithoutId & { password: string };
// Юзер без name но с паролем
export type UserLoginForm = Omit<UserWithoutId, 'name'> & { password: string };
