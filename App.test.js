import { render, screen } from '@testing-library/react';
import App from './App';

test('renders all Shop Now buttons', () => {
  render(<App />);
  const buttonElements = screen.getAllByText(/Shop Now/i);
  expect(buttonElements.length).toBeGreaterThan(0); // Or check for a specific number
});
