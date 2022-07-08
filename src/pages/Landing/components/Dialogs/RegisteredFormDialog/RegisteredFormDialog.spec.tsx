import { render } from '@testing-library/react';
import { RegisteredFormDialogProps, RegisteredFormDialog } from './index';

describe('RegisteredFormDialog Test', () => {
  let props: RegisteredFormDialogProps;

  beforeEach(() => {
    props = {
      open: true,
      onClose: jest.fn(),
      title: 'regístrese',
      description: 'description',
    };
  });

  it('should match snapshot', () => {
    const { container } = render(<RegisteredFormDialog {...props} />);
    expect(container).toMatchSnapshot();
  });
});
