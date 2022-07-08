import { render } from '@testing-library/react';
import { AccountCardListProps, CardListAccount } from './index';

describe('CardListAccount Test', () => {
  let props: AccountCardListProps;

  beforeEach(() => {
    props = {
      selected: 1,
      accounts: [
        {
          id: 1,
          nombre: 'Cuenta de ahorro',
          numeroCuenta: '234vf5',
          saldo: 50000,
          fechaCreacion: '2022-03-05 11:00:00',
        },
        {
          id: 2,
          nombre: 'Cuenta de ahorro',
          numeroCuenta: 'fgt65yg',
          saldo: 50000,
          fechaCreacion: '2022-03-04 11:00:00',
        },
      ],
      setSelected: jest.fn(),
    };
  });

  it('should match snapshot', () => {
    const { container } = render(<CardListAccount {...props} />);
    expect(container).toMatchSnapshot();
  });
});
