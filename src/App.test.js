import { render, screen } from '@testing-library/react';
import App from './App';
import user from '@testing-library/user-event'

test('can receive a new user and show it on a list', async() => {
  render(<App />)
  
  const nameInput = screen.getByRole('textbox', {
    name: /name/i
  })

    const emailInput = screen.getByRole('textbox', {
    name: /email/i
    })
  
  const button = screen.getByRole('button');

  await user.type(nameInput, 'jane');
  await user.type(emailInput, 'jane@jane.com');
  await user.click(button);

  const name = screen.getByRole('cell', { name: 'jane' })
  const email = screen.getByRole('cell', { name: 'jane@jane.com' })
  
  expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
})