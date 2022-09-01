import { IAuth } from '../interfaces/authorizationInterface';

export const searchUser = (arr: IAuth[], values: IAuth, setErrorMessage: (e: string) => void, redirect: () => void) => {
    const userAdmin = arr.find((el) => el.login === values.login && el.password === values.password)

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