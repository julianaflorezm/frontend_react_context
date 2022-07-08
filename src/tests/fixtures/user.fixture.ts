import { cloneDeep } from 'lodash';
import { UserModel } from '../../pages/Landing/models/UserModel'

export const getSingle = (user?: Partial<UserModel>): UserModel =>
  cloneDeep({
    nombre: 'bank',
    clave: '1234'
  });
