import axios from 'axios';
import { UserModel } from '../models/UserModel';
import { RegisterUserModel } from '../models/RegisterUserModel';

const baseUrl = 'http://localhost:3000/api/usuarios';

export interface QueryUser {
  nombreUsuario: string;
}

export const saveUser = async (
  usuario: UserModel,
): Promise<RegisterUserModel> => {
  const created = await axios
    .post<RegisterUserModel>(baseUrl, usuario)
    .then((res) => res.data);
  return created;
};

export const validatePassword = async (
  usuario: UserModel,
): Promise<boolean> => {
  const validated = await axios
    .get<boolean>(`${baseUrl}/validate-clave`, {
      params: usuario,
    })
    .then((res) => res.data);
  return validated;
};

export const getUser = async (nombre: string): Promise<RegisterUserModel[]> => {
  const found = await axios
    .get<RegisterUserModel[]>(baseUrl, {
      params: { nombreUsuario: nombre },
    })
    .then((res) => res.data);
  return found;
};
