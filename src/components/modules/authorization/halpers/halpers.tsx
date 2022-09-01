import { IAuth } from '../interfaces/authorizationInterface';

export const searchUser = (arr: IAuth[], values: IAuth, setErrorMessage: (e: string) => void, redirect: () => void) => {
    const userAdmin = arr.find((el) => el.login === values.login && el.password === values.password);

    if (userAdmin && userAdmin.isAdmin && values?.remember) {
        setErrorMessage('');
        window.localStorage && window.localStorage.setItem('LOGIN', JSON.stringify(userAdmin.login));
        window.localStorage && window.localStorage.setItem('PASSWORD', JSON.stringify(userAdmin.password));
        return redirect();
    }
    if (userAdmin && userAdmin.isAdmin && !values?.remember) {
        setErrorMessage('');
        return redirect();
    }
    if (userAdmin && !userAdmin.isAdmin) {
        return setErrorMessage('Недостаточно прав для входа');
    }
    if (!userAdmin) {
        return setErrorMessage('Пользователь с таким эл. адресом и паролем не найден.');
    }
    return;
};

export const monthOptions = [
    { value: 1, name: 'Январь' },
    { value: 2, name: 'Февраль' },
    { value: 3, name: 'Март' },
    { value: 4, name: 'Апрель' },
    { value: 5, name: 'Май' },
    { value: 6, name: 'Июнь' },
    { value: 7, name: 'Июль' },
    { value: 8, name: 'Август' },
    { value: 9, name: 'Сентябрь' },
    { value: 10, name: 'Октябрь' },
    { value: 11, name: 'Ноябрь' },
    { value: 12, name: 'Декабрь' },
];

export const genderOptions = [
    { value: 'male', name: 'Male' },
    { value: 'female', name: 'Female' },
];

export const yearOptions = () => {
    const year = [];
    for (let i = 1920; i < 2022; i++) {
        year.push(1 + i);
    }
    return year;
};
