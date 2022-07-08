import { UserModel } from '../../Landing/models/UserModel';

export interface AccountCreatedModel {
  id: number;
  numeroCuenta: string;
  nombre: string;
  saldo: number;
  fechaCreacion?: string;
  fechaActualizacion?: string;
  usuario?: UserModel;
}
