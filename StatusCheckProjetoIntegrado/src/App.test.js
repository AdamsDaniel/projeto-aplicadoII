import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login screen title', () => {
  render(<App />);
  const titleElement = screen.getByText(/StatusCheck/i);
  expect(titleElement).toBeInTheDocument();
});
