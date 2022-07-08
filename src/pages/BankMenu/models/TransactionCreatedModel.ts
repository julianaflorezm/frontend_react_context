import { AccountCreatedModel } from './AccountCreatedModel';

export interface TransactionCreatedModel {
  id: number;
  valor: number;
  costo: number;
  esCuentaOrigen: boolean;
  fechaCreacion?: Date;
  origen: AccountCreatedModel;
  destino: AccountCreatedModel;
}
