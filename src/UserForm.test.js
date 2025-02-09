import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {

  render(<UserForm />);


  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');


  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', async() => {
  const mock = jest.fn();
  render(<UserForm onUserAdd={mock} />);

  const [nameInput, emailInput] = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  await user.type(nameInput, 'jane');
  await user.type(emailInput, 'jane@jane.com');
  await user.click(button);


 
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@jane.com' });
});
