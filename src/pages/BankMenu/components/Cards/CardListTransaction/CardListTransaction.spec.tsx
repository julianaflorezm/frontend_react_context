import { render } from '@testing-library/react';
import { TransactionCardListProps, CardListTransaction } from './index';

describe('CardListTransaction Test', () => {
  let props: TransactionCardListProps;

  beforeEach(() => {
    props = {
      transactions: [
        {
          id: 1,
          valor: 1000,
          costo: 0,
          esCuentaOrigen: false,
          fechaCreacion: new Date('2022-03-02 11:00:00'),
          origen: {
            id: 1,
            nombre: 'Cuenta de ahorro',
            numeroCuenta: '234vf5',
            saldo: 50000,
            fechaCreacion: '2022-03-05 11:00:00',
          },
          destino: {
            id: 2,
            nombre: 'Cuenta de ahorro',
            numeroCuenta: 'fgt65yg',
            saldo: 50000,
            fechaCreacion: '2022-03-04 11:00:00',
          },
        },
      ],
    };
  });

  it('should match snapshot', () => {
    const { container } = render(<CardListTransaction {...props} />);
    expect(container).toMatchSnapshot();
  });
});
