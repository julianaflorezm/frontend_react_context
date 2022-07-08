import { fireEvent, render } from '@testing-library/react';
import { LandingProps, Landing } from './index';

describe('Landing Test', () => {
  let props: LandingProps;

  beforeEach(() => {
    props = {
      onUsername: jest.fn(),
      onId: jest.fn(),
    };
  });

  it('should match snapshot', () => {
    const { container } = render(<Landing {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should call a function when button is clicked', async () => {
    const { getByText } = render(<Landing {...props} />);
    const button = getByText('Ingresar');
    fireEvent.click(button);
    expect(getByText('Ingresar')).toBeTruthy();
  });

  it('should call a function when button is clicked', async () => {
    const { getByText } = render(<Landing {...props} />);
    const button = getByText('Registrarse');
    fireEvent.click(button);
    expect(getByText('Registrarse')).toBeTruthy();
  });
});
