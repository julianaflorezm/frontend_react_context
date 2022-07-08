import { render } from '@testing-library/react';
import moment from 'moment';
import { TransactionCardItemProps, CardItemTransaction } from './index';
import 'moment/locale/es';

describe('CardItemTransaction Test', () => {
  let props: TransactionCardItemProps;

  beforeEach(() => {
    props = {
      transaction: {
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
    };
  });

  it('should match snapshot', () => {
    const { container } = render(<CardItemTransaction {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should show valor of transaction', async () => {
    const { getByText } = render(<CardItemTransaction {...props} />);
    const typography = getByText(`$ ${props.transaction.valor}`);
    expect(`$ ${props.transaction.valor}`).toBe(typography.textContent);
  });

  it('should show date of transaction', async () => {
    const { getByText } = render(<CardItemTransaction {...props} />);
    const typography = getByText(
      moment(props.transaction.fechaCreacion).locale('es').format('LL'),
    );
    expect(
      moment(props.transaction.fechaCreacion).locale('es').format('LL'),
    ).toBe(typography.textContent);
  });
});
