export interface IAuth {
  login: string;
  password: string;
  sureName: string;
  name: string;
  lastName: string;
  confirmPassword: string;
  day: string;
  month: string;
  year: string;
  phone: string;
  gender: string;
  readOut: boolean;

  isAdmin?: boolean;
  remember?: boolean;
  avatar?: string;
}

export interface ICustomers {
  key: string;
  login: string;
  password: string;
  sureName: string;
  name: string;
  lastName: string;
  day: string;
  month: string;
  year: string;
  phone: string;
  gender: string;
  readOut: boolean;

  isAdmin?: boolean;
}
