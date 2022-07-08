import { render } from '@testing-library/react';
import { RegisteredDialogProps, RegisteredDialog } from './index';

describe('RegisteredDialog Test', () => {
  let props: RegisteredDialogProps;

  beforeEach(() => {
    props = {
      open: true,
      onClose: jest.fn(),
      title: 'regístrese',
      description: 'description',
    };
  });

  it('should match snapshot', () => {
    const { container } = render(<RegisteredDialog {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should show title of the dialog', async () => {
    const { getByTitle } = render(<RegisteredDialog {...props} />);
    const element = getByTitle('titulo');
    expect(props.title).toBe(element.textContent);
  });

  it('should show description of the dialog', async () => {
    const { getByTitle } = render(<RegisteredDialog {...props} />);
    const element = getByTitle('descripcion');
    expect(props.description).toBe(element.textContent);
  });
});
