import { fireEvent, render } from '@testing-library/react';
import { AccountCardItemProps, CardItemAccount } from './index';

describe('CatdItemAccount Test', () => {
  let props: AccountCardItemProps;

  beforeEach(() => {
    props = {
      selected: 1,
      account: {
        id: 1,
        nombre: 'Cuenta de ahorro',
        numeroCuenta: '234vf5',
        saldo: 50000,
        fechaCreacion: '2022-03-03 11:00:00',
      },
      setSelected: jest.fn(),
    };
  });

  it('should match snapshot', () => {
    const { container } = render(<CardItemAccount {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should call setSelected fn when card action area is clicked', async () => {
    const { getByTitle } = render(<CardItemAccount {...props} />);
    const actionArea = getByTitle('action');
    fireEvent.click(actionArea);
    expect(props.setSelected).toHaveBeenCalled();
  });

  it('should call setSelected fn when link is clicked', async () => {
    const { getByText } = render(<CardItemAccount {...props} />);
    const link = getByText('Ver movimientos');
    fireEvent.click(link);
    expect(props.setSelected).toHaveBeenCalled();
  });

  it('should show the name of the account', async () => {
    const { getByTitle } = render(<CardItemAccount {...props} />);
    const element = getByTitle('nombre');
    expect(`${props.account.nombre} con referencia:`).toBe(element.textContent);
  });

  it('should show the number of the account', async () => {
    const { getByTitle } = render(<CardItemAccount {...props} />);
    const element = getByTitle('numero');
    expect(props.account.numeroCuenta).toBe(element.textContent);
  });

  it('should show balance of the account', async () => {
    const { getByTitle } = render(<CardItemAccount {...props} />);
    const element = getByTitle('saldo');
    expect(` Saldo disponible: $${props.account.saldo}`).toBe(
      element.textContent,
    );
  });
});
