import { render, screen, fireEvent } from '@testing-library/react';
import AuthModal from './AuthModal';

describe('AuthModal component', () => {
  it('renders without errors', () => {
    render(<AuthModal />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders input fields with correct labels', () => {
    render(<AuthModal />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  it('updates state correctly when values are entered', () => {
    render(<AuthModal />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const usernameInput = screen.getByLabelText('Username');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('testpassword');
    expect(usernameInput).toHaveValue('testuser');
  });

  /*it('submits form when Enter is clicked', () => {
    const handleCreateUser = jest.fn();
    render(<AuthModal onSubmit={handleCreateUser} />)
   
    const submitButton = screen.getByText('Enter');

    fireEvent.click(submitButton);

    expect(handleCreateUser).toHaveBeenCalled();
     
  });*/
});
