export interface TransactionModel {
  valor: number;
  fechaCreacion?: Date;
  cuentaOrigen: string;
  cuentaDestino: string;
}
