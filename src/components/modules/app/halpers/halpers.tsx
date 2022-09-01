import { IAuth } from '../../authorization/interfaces/authorizationInterface';

const userAdmin = (arrayUsers: IAuth[]) => arrayUsers.find((el) => el.login === '' && el.password === '')
