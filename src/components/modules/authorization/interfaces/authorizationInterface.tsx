export interface IAuth {
    login: string;
    password: string;
    isAdmin: boolean;
    remember?: boolean;
}

export interface IRegistration {
    login: string;
    sureName: string;
    name: string;
    lastName: string;
    password: string;
    confirmPassword: string;
    day: string;
    month: string;
    year: string;
    phone: string;
    gender: string;
    readOut: boolean;
    isAdmin: boolean;
}
